"use client"

import { UseMutationResult, useMutation, useQuery } from "@tanstack/react-query"

import {
  CreateUserRequest,
  CreateUserResponse,
  createUser,
} from "./mutations/createUsers"
import {
  UpdateUserRequest,
  UpdateUserResponse,
  updateUser,
} from "./mutations/updateUsers"
import { UserInfoResponse, getUserById } from "./queries/getUserById"
import { UserInfoListResponse, getUserInfo } from "./queries/getUsersList"

export const useCreateUser = (): UseMutationResult<
  CreateUserResponse,
  Error,
  CreateUserRequest
> => {
  const query = useMutation<CreateUserResponse, Error, CreateUserRequest>({
    mutationKey: ["CreateUser"],
    mutationFn: (data: CreateUserRequest) => createUser(data),
  })

  return query
}

export const useUpdateUser = () => {
  return useMutation<
    UpdateUserResponse,
    Error,
    {
      id: string
      data: UpdateUserRequest
    }
  >({
    mutationKey: ["UpdateUser"],
    mutationFn: ({ id, data }) => updateUser(id, data),
  })
}

export const useGetUserById = () => {
  return useMutation<
    UserInfoResponse,
    Error,
    {
      id: string
    }
  >({
    mutationKey: ["GetUserById"],
    mutationFn: ({ id }) => getUserById(id),
  })
}

export const useGetUserInfo = () => {
  const query = useQuery<UserInfoListResponse>({
    queryKey: ["GetUserInfo"],
    queryFn: getUserInfo,
  })
  return query
}
