import { CarGrid } from "@/components/cars/car-grid";
export function PassengerCarsSection() {
  return (
    <section
      id="dong-xe"
      className="section container"
      aria-labelledby="passenger-title"
    >
      <div className="section-heading centered">
        <h2 id="passenger-title" className="catalogue-title">CÁC DÒNG XE VINFAST</h2>
      </div>
      <CarGrid group="passenger" showcase />
    </section>
  );
}
