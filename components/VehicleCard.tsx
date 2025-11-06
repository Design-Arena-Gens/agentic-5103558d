type VehicleCardProps = {
  title: string;
  description: string;
  seats: number;
  highlight?: string;
};

const VehicleCard = ({
  title,
  description,
  seats,
  highlight
}: VehicleCardProps) => (
  <article className="vehicle-card">
    <header>
      <h3>{title}</h3>
      <p className="vehicle-seats">{seats} seats</p>
    </header>
    <p>{description}</p>
    {highlight ? <p className="vehicle-highlight">{highlight}</p> : null}
  </article>
);

export default VehicleCard;
