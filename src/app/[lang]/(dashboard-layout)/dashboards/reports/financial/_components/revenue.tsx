import { revenueTrendData } from "../_data/revenue-trend"

import { Card } from "@/components/ui/card"
import { RevenueChart } from "./revenue-chart"
import { RevenueTrendSummary } from "./revenue-summary"

export function RevenueTrend() {
  return (
    <Card className="h-56 flex flex-col justify-between gap-y-6 p-6">
      <RevenueTrendSummary data={revenueTrendData.summary} />
      <RevenueChart data={revenueTrendData.revenueTrends} />
    </Card>
  )
}
