import { useMutation, UseMutationResult } from "@tanstack/react-query"
import { createClass, CreateClassRequest, CreateClassResponse } from "./mutations/createClasses"

export const useCreateClass = (): UseMutationResult<
  CreateClassResponse,
  Error,
  CreateClassRequest
> => {
  const query = useMutation<CreateClassResponse, Error, CreateClassRequest>({
    mutationKey: ["CreateClass"],
    mutationFn: (data: CreateClassRequest) => createClass(data),
  })

  return query
}