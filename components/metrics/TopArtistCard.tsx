"use client";

import useFetch from "@/app/api/useFetch";
import { Trophy } from "lucide-react";
import ArtistCard from "./base/ArtistCard";
import { ArtistAvatar } from "../ArtistAvatar";
import SkeletonArtistCard from "./loading/SkeletonArtistCard";

export default function TopArtistCard() {
  const {
    data: artist,
    isPending,
    error,
  } = useFetch("http://localhost:8000/topArtist");

  if (isPending) return <SkeletonArtistCard />;
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
