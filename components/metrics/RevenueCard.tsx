"use client";

import useFetch from "@/app/api/useFetch";
import SkeletonMetricsCard from "./loading/SkeletonMetricsCard";
import MetricsCard from "./base/MetricsCard";
import { DollarSign, Users } from "lucide-react";

export default function RevenueCard() {
  let allRevenue = 0;
  const {
    data: revenue,
    isPending,
    error,
  } = useFetch("http://localhost:8000/revenue");

  if (isPending) return <SkeletonMetricsCard />;
  if (error) return <p>Error: {error}</p>;

  if (revenue) {
    allRevenue = revenue[0].amount + revenue[1].amount;
  }

  return (
    <MetricsCard
      type="revenue"
      title="Total Revenue"
      icon={<DollarSign />}
      description="Total revenue from all sources."
      value={allRevenue}
      change="+44% from last month"
    />
  );
}
