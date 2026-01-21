"use client"

import { useGetWorkoutList } from "@/services/workout/useWorkoutApis"
import { WorkoutPlan } from "../_components/workout-plan"
import { movementData as data } from "../_data/movement"

export default function WorkoutsListPage() {
  // const { data } = useGetWorkoutList()

  if (data?.data == undefined || data.data.length == 0) {
    return (
      <div className="flex">
        <div className="">
          برنامه ای یافت نشد
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data?.data?.map((plan) => (
        <WorkoutPlan key={plan.id} data={plan} />
      ))}
    </div>
  )
}
