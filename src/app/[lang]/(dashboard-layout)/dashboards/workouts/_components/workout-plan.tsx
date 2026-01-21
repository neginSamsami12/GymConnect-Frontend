import {
  DashboardCard,
  DashboardCardActionsDropdown,
} from "@/components/dashboards/dashboard-card"
import { MovementList } from "./movement-list"
import { WorkoutInfo } from "@/services/workout/queries/getWorkoutsList"

export function WorkoutPlan({data}: {data: WorkoutInfo}) {
  return (
    <DashboardCard
      key={data.id}
      title={data.title}
      description={data.description}
      action={<DashboardCardActionsDropdown />}
      size="lg"
      contentClassName="overflow-y-auto h-[42rem]"
    >
      <MovementList data={data.exercises} />
    </DashboardCard>
  )
}
