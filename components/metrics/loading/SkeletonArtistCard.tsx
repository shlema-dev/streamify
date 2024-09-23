import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SkeletonArtistCard() {
  return (
    <Card className="w-[350px] border-none animate-pulse">
      <CardHeader>
        <CardTitle>
          <div className="w-full flex gap-2 items-center">
            <div className="text-muted-foreground">
              <div className="w-6 h-6 bg-muted-foreground/20 rounded-full"></div>
            </div>
            <p className="w-32 h-[26px] bg-muted-foreground/20 rounded-md"></p>
          </div>
        </CardTitle>
        <CardDescription className="w-48 h-4 bg-muted-foreground/20 rounded-md"></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <p className="w-16 h-8 bg-muted-foreground/20 rounded-md"></p>
          <span className="w-20 h-4 bg-muted-foreground/20 rounded-md block mt-2"></span>
        </div>
      </CardContent>
    </Card>
  );
}
