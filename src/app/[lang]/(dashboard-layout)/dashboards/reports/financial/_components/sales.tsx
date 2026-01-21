import { salesTrendData } from "../_data/sales"

import {
  DashboardCard,
  DashboardCardActionsDropdown,
} from "@/components/dashboards/dashboard-card"
import { SalesChart } from "./sales-chart"

export function Sales() {
  return (
    <DashboardCard
      title="روند فروش"
      description={salesTrendData.period}
      action={<DashboardCardActionsDropdown />}
      className="col-span-full md:col-span-3"
    >
      <SalesChart data={salesTrendData} />
    </DashboardCard>
  )
}
