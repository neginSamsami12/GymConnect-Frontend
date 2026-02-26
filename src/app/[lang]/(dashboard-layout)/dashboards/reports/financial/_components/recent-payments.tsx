import { RecentPaymentsData } from "../_data/recent-payments"

import {
  DashboardCard,
  DashboardCardActionsDropdown,
} from "@/components/dashboards/dashboard-card"
import { TopSalesRepresentativesList } from "./recent-payments-list"

export function RecentPayments() {
  return (
    <DashboardCard
      title="پرداختی‌های اخیر "
      description={RecentPaymentsData.period}
    >
      <TopSalesRepresentativesList data={RecentPaymentsData.payments} />
    </DashboardCard>
  )
}
