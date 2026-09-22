import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const output = mkdtempSync(path.join(tmpdir(), "vinfast-loan-test-"));
let calculateLoan, validateLoan, paymentDate;
try {
  execFileSync(
    process.execPath,
    [
      path.join(projectRoot, "node_modules/typescript/bin/tsc"),
      "lib/loan-calculator.ts",
      "--outDir",
      output,
      "--module",
      "commonjs",
      "--target",
      "ES2022",
      "--skipLibCheck",
    ],
    { cwd: projectRoot, stdio: "pipe" },
  );
  ({ calculateLoan, validateLoan, paymentDate } = await import(
    pathToFileURL(path.join(output, "loan-calculator.js")).href
  ));
} finally {
  rmSync(output, { recursive: true, force: true });
}
const base = {
  vehiclePrice: 200_000_000,
  principal: 120_000_000,
  months: 12,
  annualRate: 12,
  startDate: "2026-01-31",
  method: "declining",
};
test("equal principal: known first/last payment and arithmetic-series interest", () => {
  const r = calculateLoan(base);
  assert.equal(r.firstPayment, 11_200_000);
  assert.equal(r.lastPayment, 10_100_000);
  assert.equal(r.totalInterest, 7_800_000);
  assert.equal(r.totalPayment, 127_800_000);
  assert.equal(r.upfront, 80_000_000);
});
test("fixed monthly: known annuity, final adjustment settles all principal", () => {
  const r = calculateLoan({ ...base, method: "fixed" });
  assert.equal(r.regularPayment, 10_661_855);
  assert.equal(r.rows.at(-1).remaining, 0);
  assert.equal(
    r.rows.reduce((s, x) => s + x.principal, 0),
    base.principal,
  );
  for (const row of r.rows.slice(0, -1))
    assert.equal(row.payment, r.regularPayment);
});
test("zero interest and uneven division reconcile in both modes", () => {
  for (const method of ["declining", "fixed"]) {
    const r = calculateLoan({
      ...base,
      principal: 100,
      months: 3,
      annualRate: 0,
      method,
    });
    assert.equal(r.totalInterest, 0);
    assert.equal(r.totalPayment, 100);
    assert.equal(r.rows.at(-1).remaining, 0);
  }
});
test("month end dates stay anchored and handle leap years", () => {
  assert.equal(paymentDate("2026-01-31", 1), "2026-02-28");
  assert.equal(paymentDate("2026-01-31", 2), "2026-03-31");
  assert.equal(paymentDate("2024-01-31", 1), "2024-02-29");
  assert.equal(paymentDate("2026-12-31", 1), "2027-01-31");
});
test("zero loan and single-month loan", () => {
  const zero = calculateLoan({ ...base, principal: 0 });
  assert.equal(zero.rows.length, 0);
  assert.equal(zero.totalPayment, 0);
  for (const method of ["declining", "fixed"]) {
    const r = calculateLoan({ ...base, months: 1, method });
    assert.equal(r.totalInterest, 1_200_000);
    assert.equal(r.lastPayment, 121_200_000);
  }
});
test("invalid input never produces a schedule", () => {
  for (const patch of [
    { vehiclePrice: 0 },
    { vehiclePrice: Infinity },
    { principal: -1 },
    { principal: 180_000_000 },
    { months: 0 },
    { months: 1.5 },
    { months: 121 },
    { annualRate: NaN },
    { annualRate: -1 },
    { annualRate: 101 },
    { startDate: "2026-02-30" },
    { startDate: "" },
  ]) {
    assert.ok(validateLoan({ ...base, ...patch }));
    assert.throws(() => calculateLoan({ ...base, ...patch }));
  }
});
test("rounding and accounting invariants across terms/rates/methods", () => {
  for (const method of ["declining", "fixed"])
    for (const months of [1, 7, 60, 120])
      for (const annualRate of [0, 0.0001, 7.5, 100]) {
        const r = calculateLoan({
          ...base,
          principal: 123456789,
          months,
          annualRate,
          method,
        });
        assert.equal(
          r.rows.reduce((s, x) => s + x.principal, 0),
          123456789,
        );
        assert.equal(
          r.rows.reduce((s, x) => s + x.payment, 0),
          r.totalPayment,
        );
        assert.equal(r.rows.at(-1).remaining, 0);
        for (const row of r.rows) {
          assert.ok(row.remaining >= 0);
          assert.equal(row.opening - row.principal, row.remaining);
          assert.equal(row.principal + row.interest, row.payment);
        }
      }
});

test("two-stage declining: rate changes exactly at month 13", () => {
  const r = calculateLoan({...base, months: 24, annualRate: 0, subsequentAnnualRate: 12});
  assert.equal(r.rows[11].interest, 0);
  assert.equal(r.rows[12].opening, 60_000_000);
  assert.equal(r.rows[12].interest, 600_000);
  assert.equal(r.rows[12].payment, 5_600_000);
  assert.equal(r.totalInterest, 3_900_000);
  assert.equal(r.rows.at(-1).remaining, 0);
});
test("two-stage annuity recalculates on outstanding balance; short loans unchanged", () => {
  const r = calculateLoan({...base, method: "fixed", months: 24, annualRate: 0, subsequentAnnualRate: 12});
  const expected = Math.round(60_000_000 * .01 / (1 - Math.pow(1.01, -12)));
  assert.equal(r.rows[11].payment, 5_000_000);
  assert.equal(r.rows[12].payment, expected);
  assert.equal(r.rows.at(-1).remaining, 0);
  assert.equal(r.rows.reduce((sum, row) => sum + row.principal, 0), base.principal);
  assert.deepEqual(calculateLoan({...base, subsequentAnnualRate: 35}), calculateLoan(base));
  assert.ok(validateLoan({...base, subsequentAnnualRate: NaN}));
  assert.ok(validateLoan({...base, subsequentAnnualRate: -1}));
  const zero = calculateLoan({...base, method: "fixed", months: 24, subsequentAnnualRate: 0});
  assert.equal(zero.rows[12].interest, 0);
  assert.equal(zero.rows.at(-1).remaining, 0);
});
