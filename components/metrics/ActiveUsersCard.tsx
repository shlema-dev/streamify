"use client";

import useFetch from "@/app/api/useFetch";
import SkeletonMetricsCard from "./loading/SkeletonMetricsCard";
import MetricsCard from "./base/MetricsCard";
import { UserCheck, Users } from "lucide-react";

export default function ActiveUsersCard() {
  const {
    data: activeUsers,
    isPending,
    error,
  } = useFetch("http://localhost:8000/activeUsers");

  if (isPending) return <SkeletonMetricsCard />;
  if (error) return <p>Error: {error}</p>;

  return (
    <MetricsCard
      title="Active Users"
      icon={<UserCheck />}
      description="Users active in the last month."
      value={activeUsers}
      change="+28% from last month"
    />
  );
}
