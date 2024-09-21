"use client";

import useFetch from "@/app/api/useFetch";
import SkeletonMetricsCard from "./loading/SkeletonMetricsCard";
import MetricsCard from "./base/MetricsCard";
import { Activity, UserCheck, Users } from "lucide-react";

export default function TotalStreamsCard() {
  const {
    data: totalStreams,
    isPending,
    error,
  } = useFetch("http://localhost:8000/totalStreams");

  if (isPending) return <SkeletonMetricsCard />;
  if (error) return <p>Error: {error}</p>;

  return (
    <MetricsCard
      title="Total Streams"
      icon={<Activity />}
      description="Stream count from the last month"
      value={totalStreams}
      change="+52% from last month"
    />
  );
}
