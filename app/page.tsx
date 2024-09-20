import Charts from "@/components/charts/Charts";
import KeyMetrics from "@/components/metrics/KeyMetrics";

export default function Home() {
  return (
    <div className="w-full my-24 xl:my-12 xl:px-12 overflow-auto flex flex-col items-center lg:items-start">
      <KeyMetrics />
      <Charts />
    </div>
  );
}
