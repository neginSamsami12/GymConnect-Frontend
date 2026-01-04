import { movementData } from "../_data/movement"

import {
  DashboardCard,
  DashboardCardActionsDropdown,
} from "@/components/dashboards/dashboard-card"
import { MovementList } from "./movement-list"

export function Movement() {
  return (
    <DashboardCard
      title="برنامه تمرینی کاربر"
      period={movementData.period}
      action={<DashboardCardActionsDropdown />}
      size="lg"
      contentClassName="overflow-y-auto h-[42rem]"
    >
      <MovementList data={movementData.movements} />
    </DashboardCard>
  )
}
