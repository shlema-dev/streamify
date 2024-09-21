"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CountAnimation } from "../../ui/CountAnimation";

interface ArtistCardProps {
  title: string;
  icon: React.ReactNode;
  artist: string;
  description: string;
  avatar: React.ReactNode;
  value: number;
}

export default function ArtistCard({
  title,
  icon,
  artist,
  description,
  avatar,
  value,
}: ArtistCardProps) {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <CardTitle>
          <div className="w-full flex gap-2 items-center">
            <div className="text-muted-foreground">{icon}</div>
            {title}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col -mt-3 gap-2">
          <div className="w-full flex gap-2 items-center">
            {avatar}
            <div className="flex flex-col">
              <p>{artist}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <p className="text-2xl text-primary font-bold">
            <CountAnimation endValue={value} /> streams
          </p>
          <p className="text-sm text-muted-foreground"></p>
        </div>
      </CardContent>
    </Card>
  );
}
