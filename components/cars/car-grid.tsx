import { cars } from "@/lib/data/cars";
import { CarCard } from "./car-card";
import { Reveal } from "@/components/ui/reveal";
export function CarGrid({ group, showcase = false }: { group: "passenger" | "commercial"; showcase?: boolean }) {
  return (
    <div className="car-grid">
      {cars
        .filter((car) => car.group === group)
        .map((car, index) => (
          <Reveal key={car.slug} delay={(index % 3) * 0.05}>
            <CarCard car={car} showcase={showcase} />
          </Reveal>
        ))}
    </div>
  );
}
