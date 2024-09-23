"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import useFetch from "@/app/api/useFetch";

const chartConfig = {
  song: {
    label: "Song",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function TopSongsChart() {
  const {
    data: chartData,
    isPending,
    error,
  } = useFetch("http://localhost:8000/topSongs");

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip bg-popover p-2 rounded-md shadow-md border border-border">
          <p className="label font-semibold">{`${data.name}`}</p>
          <p className="amount">{`${data.streams}`}</p>
        </div>
      );
    }
    return null;
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <Card className="border-none">
      {isPending ? (
        <CardHeader>
          <div className="h-6 w-1/3 bg-foreground/20 rounded animate-pulse"></div>
          <div className="h-3 w-2/3 bg-foreground/20 rounded mt-2 animate-pulse"></div>
        </CardHeader>
      ) : (
        <CardHeader>
          <CardTitle>Top Songs</CardTitle>
          <CardDescription>Most streamed songs in last 30 days</CardDescription>
        </CardHeader>
      )}

      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            {/* Create gradients for chart fill */}
            <defs>
              <linearGradient id="fillSong" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-song)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-song)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              className="text-xs"
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip cursor={false} content={CustomTooltip} />
            <Bar dataKey="streams" fill="url(#fillSong)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
