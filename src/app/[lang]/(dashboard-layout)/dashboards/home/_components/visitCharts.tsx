"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import type { VisitOverTimeType } from "../types"

import { useIsRtl } from "@/hooks/use-is-rtl"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export function VisitCharts({
  data,
}: {
  data: VisitOverTimeType["performance"]
}) {
  const isRtl = useIsRtl()

  return (
    <ChartContainer config={{}} className="aspect-auto h-full w-full">
      <LineChart
        accessibilityLayer
        data={data}
        margin={{
          left: 40,
          right: 40,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          reversed={isRtl}
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value}
        />
        <YAxis yAxisId="left" hide />
        <YAxis yAxisId="right" orientation="right" hide />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="بازدیدکنندگان"
          yAxisId="left"
          type="linear"
          stroke="hsl(var(--chart-1))"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="پیام‌ها"
          yAxisId="right"
          type="linear"
          stroke="hsl(var(--chart-2))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}
