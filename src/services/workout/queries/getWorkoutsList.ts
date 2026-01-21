import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"
import { ApiResponse } from "../../apiTypes"
import { Exercise } from "@/models/workout"

export interface WorkoutInfo {
  id: string
  trainerName: string
  athleteName: string
  title: string
  description: string
  exercises: Exercise[]
}

export type WorkoutInfoListResponse = ApiResponse<WorkoutInfo[]>

export async function getWorkoutList() {
  const response = await baseAxios.get(`${BASE_URL}/${CONTROLLERS.WORKOUT}`)
  return response.data
}
