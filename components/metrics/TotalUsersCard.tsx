"use client";

import useFetch from "@/app/api/useFetch";
import SkeletonMetricsCard from "./loading/SkeletonMetricsCard";
import MetricsCard from "./base/MetricsCard";
import { Users } from "lucide-react";

export default function TotalUsersCard() {
  const {
    data: totalUsers,
    isPending,
    error,
  } = useFetch("http://localhost:8000/totalUsers");

  if (isPending) return <SkeletonMetricsCard />;
  if (error) return <p>Error: {error}</p>;

  return (
    <MetricsCard
      title="Total Users"
      icon={<Users />}
      description="Number of registered users on platform."
      value={totalUsers}
      change="+36% from last month"
    />
  );
}
