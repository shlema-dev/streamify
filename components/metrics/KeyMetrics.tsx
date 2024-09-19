import {
  Activity,
  DollarSign,
  Trophy,
  User,
  UserCheck,
  Users,
} from "lucide-react";
import MetricsCard from "./MetricsCard";
import ArtistCard from "./ArtistCard";
import { ArtistAvatar } from "../ArtistAvatar";

export default function KeyMetrics() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Overview</h1>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap just items-center md:items-start gap-8">
        <MetricsCard
          title="Total Users"
          icon={<Users />}
          description="Number of registered users on platform."
          value="3,774,895"
          change="+36% from last month"
        />
        <MetricsCard
          title="Active Users"
          icon={<UserCheck />}
          description="Users active in the last month."
          value="2,837,560"
          change="+28% from last month"
        />
        <MetricsCard
          title="Total Streams"
          icon={<Activity />}
          description="Number of streams on platform."
          value="12,434,478"
          change="+17% from last month"
        />
        <MetricsCard
          title="Revenue"
          icon={<DollarSign />}
          description="Total revenue from all sources."
          value="$4,774,895"
          change="+44% from last month"
        />
        <ArtistCard
          title="Top Artist"
          icon={<Trophy />}
          artist="Beatz"
          avatar={<ArtistAvatar />}
          description="Deep House"
          value="1,568,604"
        />
      </div>
    </>
  );
}
