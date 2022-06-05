import Clock from "./Clock";

export default function CLockList({ quantities = [] }) {
  return (
    <div>
      {quantities.map((key) => (
        <Clock key={key} />
      ))}
    </div>
  );
}
