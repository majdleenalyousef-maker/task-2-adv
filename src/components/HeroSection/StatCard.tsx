
type StatCardProps = {
  value: string;
  label: string;
};

function StatCard({ value, label }: StatCardProps) {
  return (
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default StatCard;
