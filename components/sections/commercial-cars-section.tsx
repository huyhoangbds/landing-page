import { CarGrid } from "@/components/cars/car-grid";
export function CommercialCarsSection() {
  return (
    <section
      id="xe-dich-vu"
      className="section muted-section commercial-catalogue"
      aria-labelledby="commercial-title"
    >
      <div className="container">
        <div className="section-heading centered">
          <h2 id="commercial-title" className="catalogue-title">XE CHẠY DỊCH VỤ</h2>
        </div>
        <CarGrid group="commercial" showcase />
      </div>
    </section>
  );
}
