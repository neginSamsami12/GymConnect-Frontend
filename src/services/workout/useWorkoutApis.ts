"use client"

import { UseMutationResult, useMutation, useQuery } from "@tanstack/react-query"

import {
  CreateWorkoutRequest,
  CreateWorkoutResponse,
  createWorkout,
} from "./mutations/createWorkout"
import {
  WorkoutInfoListResponse,
  getWorkoutList,
} from "./queries/getWorkoutsList"

export const useCreateWorkout = (): UseMutationResult<
  CreateWorkoutResponse,
  Error,
  CreateWorkoutRequest
> => {
  const query = useMutation<CreateWorkoutResponse, Error, CreateWorkoutRequest>(
    {
      mutationKey: ["CreateWorkout"],
      mutationFn: (data: CreateWorkoutRequest) => createWorkout(data),
    }
  )

  return query
}

export const useGetWorkoutList = () => {
  const query = useQuery<WorkoutInfoListResponse>({
    queryKey: ["GetWorkoutList"],
    queryFn: getWorkoutList,
  })
  return query
}
