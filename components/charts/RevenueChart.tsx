"use client";
import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
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
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const description = "An interactive pie chart";

const revenueData = [
  {
    source: "Subscriptions",
    amount: 5445358,
    fill: "url(#gradientSubscriptions)",
  },
  {
    source: "Advertisements",
    amount: 9723475,
    fill: "url(#gradientAdvertisements)",
  },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  amount: {
    label: "amount",
  },
  Subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  Advertisements: {
    label: "Advertisements",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function RevenueChart() {
  const id = "pie-interactive";
  const [activeSource, setActiveSource] = React.useState(revenueData[0].source);
  const activeIndex = React.useMemo(
    () => revenueData.findIndex((item) => item.source === activeSource),
    [activeSource]
  );
  const sources = React.useMemo(
    () => revenueData.map((item) => item.source),
    []
  );

  const handlePieClick = (data: any, index: number) => {
    setActiveSource(data.source);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip bg-popover p-2 rounded-md shadow-md border border-border">
          <p className="label font-semibold">{`${data.source}`}</p>
          <p className="amount">{`$${data.amount.toLocaleString()}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card data-chart={id} className="flex flex-col border-none">
      <ChartStyle id={id} config={chartConfig} />

      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Revenue Distribution</CardTitle>
          <CardDescription>September 2023 - September 2024</CardDescription>
        </div>
        {/* Dropdown selector for revenue type */}
        <Select value={activeSource} onValueChange={setActiveSource}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a source"
          >
            <SelectValue placeholder="Select source" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {sources.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];
              if (!config) {
                return null;
              }
              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-md"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart accessibilityLayer>
            {/* Create gradient for chart sections */}
            <defs>
              <linearGradient
                id="gradientSubscriptions"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={chartConfig.Subscriptions.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.Subscriptions.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient
                id="gradientAdvertisements"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={chartConfig.Advertisements.color}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.Advertisements.color}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <ChartTooltip cursor={false} content={CustomTooltip} />

            <Pie
              data={revenueData}
              dataKey="amount"
              nameKey="source"
              innerRadius={80}
              outerRadius={120}
              activeIndex={activeIndex}
              onClick={handlePieClick}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 20}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {`$${revenueData[
                            activeIndex
                          ].amount.toLocaleString()}`}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {revenueData[activeIndex].source}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
