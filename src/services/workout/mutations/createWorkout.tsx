import { Exercise } from "@/models/workout"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface CreateWorkoutRequest {
  athleteId: string
  title: string
  description: string
  exercises: Exercise[]
}

export type CreateWorkoutResponse = ApiResponse<unknown>

export async function createWorkout(data: CreateWorkoutRequest) {
  const response = await baseAxios.post(`${BASE_URL}/${CONTROLLERS.WORKOUT}`, {
    athleteId: data.athleteId,
    title: data.title,
    description: data.description,
    exercises: data.exercises,
  })

  return response.data
}
