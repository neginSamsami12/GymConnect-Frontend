import { UseMutationResult, useMutation, useQuery } from "@tanstack/react-query"

import {
  CreateClassRequest,
  CreateClassResponse,
  createClass,
} from "./mutations/createClasses"
import { ClassInfoListResponse, getClassInfo } from "./queries/getClassesList"

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

export const useGetClassesInfo = () => {
  const query = useQuery<ClassInfoListResponse>({
    queryKey: ["GetClassesInfo"],
    queryFn: () => getClassInfo(),
  })
  return query
}

export const useGetClassesInfoMutate = () => {
  return useMutation<
    ClassInfoListResponse,
    Error,
    {
      id: string
    }
  >({
    mutationKey: ["GetClassesInfoMutate"],
    mutationFn: ({ id }) => getClassInfo(id),
  })
}
