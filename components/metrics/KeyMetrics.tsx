import TotalUsersCard from "./TotalUsersCard";
import ActiveUsersCard from "./ActiveUsersCard";
import TotalStreamsCard from "./TotalStreamsCard";
import RevenueCard from "./RevenueCard";
import TopArtistCard from "./TopArtistCard";

export default function KeyMetrics() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Overview</h1>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap just items-center md:items-start gap-8">
        <TotalUsersCard />
        <ActiveUsersCard />
        <TotalStreamsCard />
        <RevenueCard />
        <TopArtistCard />
      </div>
    </>
  );
}
