import { genderDistributionData } from "../_data/gender-distribution"

import { DashboardCard } from "@/components/dashboards/dashboard-card"
import { GenderDistributionChart } from "./gender-distribution-chart"

export function GenderDistribution() {
  return (
    <DashboardCard title="درصد فعالیت کاربران" contentClassName="p-0" size="xs">
      <GenderDistributionChart data={genderDistributionData} />
    </DashboardCard>
  )
}
