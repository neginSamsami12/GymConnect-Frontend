"use client"

import { useGetSummaryReportsInfo } from "@/services/reports/useReportsApis"
import { BadgePercent, HandCoins, Users } from "lucide-react"
import {
  DashboardOverviewCard,
} from "@/components/dashboards/dashboard-card"

export function Overview() {
  const { data } = useGetSummaryReportsInfo()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:col-span-2 md:grid-cols-4">
      <DashboardOverviewCard
        data={data?.data?.totalSells || 0}
        title=" فروش کل"
        period={"ماه گذشته"}
        icon={BadgePercent}
        formatStyle="currency"
      />
      <DashboardOverviewCard
        data={data?.data?.totalProfit || 0}
        title=" سود کل"
        period={"ماه گذشته"}
        icon={HandCoins}
        formatStyle="currency"
      />
      <DashboardOverviewCard
        data={data?.data?.incomeGrowth || 0}
        title="رشد درآمد"
        period={"ماه گذشته"}
        icon={HandCoins}
        formatStyle="currency"
      />
      <DashboardOverviewCard
        data={data?.data?.newUser || 0}
        title="کاربران جدید"
        period={"ماه گذشته"}
        icon={Users}
      />
    </div>
  )
}
