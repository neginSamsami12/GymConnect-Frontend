import { onlinePaymentnData } from "../_data/online-payment"

import {
  DashboardCard,
  DashboardCardActionsDropdown,
} from "@/components/dashboards/dashboard-card"
import { CustomerSatisfactionCarousel } from "./online-payment-carousel"
import { CustomerSatisfactionChart } from "./online-payment-chart"

export function OnlinePayment() {
  return (
    <DashboardCard
      title="پرداخت آنلاین"
      description={onlinePaymentnData.period}
      contentClassName="h-auto items-center gap-6 md:h-64 md:flex-row"
    >
      <CustomerSatisfactionChart data={onlinePaymentnData.summary} />
    </DashboardCard>
  )
}
