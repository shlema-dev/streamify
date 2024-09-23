"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import useFetch from "@/app/api/useFetch";
import { useEffect, useState } from "react";
import { getMonthName } from "@/lib/utils";

interface MonthObject {
  month: string;
  totalUsers: number;
  activeUsers: number;
}

const chartConfig = {
  totalUsers: {
    label: "Total",
    color: "hsl(var(--chart-1))",
  },
  activeUsers: {
    label: "Active",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function UserGrowthChart() {
  const [formattedData, setFormattedData] = useState<MonthObject[]>([]);

  const {
    data: chartData,
    isPending,
    error,
  } = useFetch("http://localhost:8000/userGrowth");

  useEffect(() => {
    if (!chartData) return;

    const formattedData = chartData.map((chart: MonthObject) => ({
      ...chart,
      month: getMonthName(chart.month),
    }));

    setFormattedData(formattedData);
  }, [chartData]);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Card className="border-none max-h-[500px]">
        {isPending ? (
          <CardHeader>
            <div className="h-5 w-1/3 bg-muted-foreground/20 rounded-md animate-pulse"></div>
            <div className="h-[14px] w-2/3 bg-muted-foreground/20 rounded-md mt-2 animate-pulse"></div>
          </CardHeader>
        ) : (
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
            <CardDescription>
              Total and Active users in the past 12 months
            </CardDescription>
          </CardHeader>
        )}

        <CardContent>
          <ChartContainer
            className="min-h-[200px] max-h-[300px] w-full"
            config={chartConfig}
          >
            <AreaChart
              accessibilityLayer
              data={formattedData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />

              {/* Create gradients for chart fill */}
              <defs>
                <linearGradient id="fillTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-totalUsers)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-totalUsers)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillActive" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-activeUsers)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-activeUsers)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>

              <Area
                dataKey="activeUsers"
                type="natural"
                fill="url(#fillActive)"
                fillOpacity={0.4}
                stroke="var(--color-activeUsers)"
                stackId="a"
              />
              <Area
                dataKey="totalUsers"
                type="natural"
                fill="url(#fillTotal)"
                fillOpacity={0.4}
                stroke="var(--color-totalUsers)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>

        {isPending ? (
          <CardFooter>
            <div className="flex flex-col gap-2 w-full items-start animate-pulse">
              <div className="h-4 w-1/3 bg-muted-foreground/20 rounded-md"></div>
              <div className="h-4 w-1/3 bg-muted-foreground/20 rounded-md"></div>
            </div>
          </CardFooter>
        ) : (
          <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 font-medium leading-none">
                  Trending up by 237% this year{" "}
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                  September 2023 - September 2024
                </div>
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
