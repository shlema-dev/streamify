import { UserGrowthChart } from "./UserGrowthChart";

export default function Charts() {
  return (
    <div className="mt-12 w-full">
      <h1 className="text-2xl font-bold mb-6">Trends</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <UserGrowthChart />
        <UserGrowthChart />
        <UserGrowthChart />
        <UserGrowthChart />
      </div>
    </div>
  );
}
