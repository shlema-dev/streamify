"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CountAnimation } from "../ui/CountAnimation";

interface MetricsCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  value: number;
  change?: string;
  type?: string;
}

export default function MetricsCard({
  title,
  icon,
  description,
  value,
  change,
  type = "default",
}: MetricsCardProps) {
  return (
    <Card className="w-[350px] border-none">
      <CardHeader>
        <CardTitle>
          <div className="w-full flex gap-2 items-center">
            <div className="text-muted-foreground">{icon}</div>
            {title}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <p className="text-2xl text-primary font-bold">
            {type === "revenue" && "$"}
            <CountAnimation endValue={value} />
          </p>
          <p className="text-sm text-muted-foreground">{change}</p>
        </div>
      </CardContent>
    </Card>
  );
}
