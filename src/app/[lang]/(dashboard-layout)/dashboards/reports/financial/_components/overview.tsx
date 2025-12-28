import { BadgePercent, HandCoins, Users } from "lucide-react"

import { overviewData } from "../_data/overview"

import {
  DashboardCardActionsDropdown,
  DashboardOverviewCard,
} from "@/components/dashboards/dashboard-card"

export function Overview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-2 md:grid-cols-4">
      <DashboardOverviewCard
        data={overviewData.totalSales}
        title=" فروش کل"
        period={overviewData.totalSales.period}
        action={<DashboardCardActionsDropdown />}
        icon={BadgePercent}
        formatStyle="currency"
      />
      <DashboardOverviewCard
        data={overviewData.totalProfit}
        title=" سود کل"
        period={overviewData.totalProfit.period}
        action={<DashboardCardActionsDropdown />}
        icon={HandCoins}
        formatStyle="currency"
      />
      <DashboardOverviewCard
        data={overviewData.revenueGrowth}
        title="رشد درآمد"
        period={overviewData.revenueGrowth.period}
        action={<DashboardCardActionsDropdown />}
        icon={HandCoins}
        formatStyle="currency"
      />
      <DashboardOverviewCard
        data={overviewData.newCustomers}
        title="کاربران جدید"
        period={overviewData.newCustomers.period}
        action={<DashboardCardActionsDropdown />}
        icon={Users}
      />
    </div>
  )
}
