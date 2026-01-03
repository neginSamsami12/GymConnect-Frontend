import { topProductsData } from "../_data/top-products"

import {
  DashboardCard,
  DashboardCardActionsDropdown,
} from "@/components/dashboards/dashboard-card"
import { MovementList } from "./movement-list"

export function TopProducts() {
  return (
    <DashboardCard
      title="Top Products"
      period={topProductsData.period}
      action={<DashboardCardActionsDropdown />}
      size="lg"
    >
      <MovementList data={topProductsData.movements} />
    </DashboardCard>
  )
}
