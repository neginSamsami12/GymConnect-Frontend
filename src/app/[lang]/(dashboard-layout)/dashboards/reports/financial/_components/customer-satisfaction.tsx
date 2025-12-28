import { customerSatisfactionData } from "../_data/customer-satisfaction"

import {
  DashboardCard,
  DashboardCardActionsDropdown,
} from "@/components/dashboards/dashboard-card"
import { CustomerSatisfactionCarousel } from "./customer-satisfaction-carousel"
import { CustomerSatisfactionChart } from "./customer-satisfaction-chart"

export function CustomerSatisfaction() {
  return (
    <DashboardCard
      title="پرداخت آنلاین"
      period={customerSatisfactionData.period}
      action={<DashboardCardActionsDropdown />}
      contentClassName="h-auto items-center gap-6 md:h-64 md:flex-row"
    >
      <CustomerSatisfactionChart data={customerSatisfactionData.summary} />
    </DashboardCard>
  )
}
