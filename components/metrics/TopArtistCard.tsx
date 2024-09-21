"use client";

import useFetch from "@/app/api/useFetch";
import SkeletonMetricsCard from "./loading/SkeletonMetricsCard";
import MetricsCard from "./base/MetricsCard";
import { Trophy, Users } from "lucide-react";
import ArtistCard from "./base/ArtistCard";
import { ArtistAvatar } from "../ArtistAvatar";

export default function TopArtistCard() {
  const {
    data: artist,
    isPending,
    error,
  } = useFetch("http://localhost:8000/topArtist");

  if (isPending) return <SkeletonMetricsCard />;
  if (error) return <p>Error: {error}</p>;

  return (
    <ArtistCard
      title="Top Artist"
      icon={<Trophy />}
      artist={artist.artist}
      avatar={<ArtistAvatar />}
      description="Deep House"
      value={artist.streams}
    />
  );
}
