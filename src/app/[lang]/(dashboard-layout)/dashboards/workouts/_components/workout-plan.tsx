import { DashboardCard } from "@/components/dashboards/dashboard-card"
import { MovementList } from "./movement-list"
import { WorkoutInfo } from "@/services/workout/queries/getWorkoutsList"
import { CardHeader, CardTitle } from "@/components/ui/card"

export function WorkoutPlan({ data }: { data: WorkoutInfo }) {
  return (
    <DashboardCard
      key={data.id}
      title=''
      size="empty"
    >
      <CardHeader>
        <CardTitle className="text-xl">
          {data.title}
        </CardTitle>
        <div>
          مربی: {data.trainerName}
        </div>
        <div>
          توضیحات: {data.description}
        </div>
      </CardHeader>
      <MovementList data={data.exercises} />
    </DashboardCard >
  )
}
