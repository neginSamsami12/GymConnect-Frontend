import { customerInsightsData } from "../_data/customer-insights"

import {
  DashboardCard,
  DashboardCardActionsDropdown,
} from "@/components/dashboards/dashboard-card"
import { CustomerInsightList } from "./customer-insight-list"

export function CustomerInsights() {
  return (
    <DashboardCard
      title="آمار کاربران"
      description={customerInsightsData.period}
      size="xs"
      className="md:col-span-3"
      contentClassName="justify-center"
    >
      <CustomerInsightList data={customerInsightsData} />
    </DashboardCard>
  )
}
