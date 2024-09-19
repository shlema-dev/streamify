import Charts from "@/components/charts/Charts";
import KeyMetrics from "@/components/metrics/KeyMetrics";

export default function Home() {
  return (
    <div className="w-full mt-24 lg:mt-12 lg:px-12 overflow-auto flex flex-col items-center lg:items-start">
      <KeyMetrics />
      <Charts />
    </div>
  );
}
