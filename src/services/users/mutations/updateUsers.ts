import { Gender } from "@/types"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface UpdateUserRequestData {
  firstName: string
  lastName: string
  gender: Gender
  email?: string
  phone?: string
  birthDate: string // "YYYY-MM-DD"
  address?: string
  nationalId: string
}

export interface UpdateUserRequest extends UpdateUserRequestData {
  image?: File
}

export type UpdateUserResponse = ApiResponse<unknown>

export async function updateUser(id: string, data: UpdateUserRequest) {
  const form = new FormData()

  const { image, ...userData } = data
  form.set(
    "data",
    new Blob([JSON.stringify(userData)], { type: "application/json" })
  )

  if (data.image) {
    form.append("image", data.image)
  }
  const response = await baseAxios.put(
    `${BASE_URL}/${CONTROLLERS.USER}/${id}`,
    form
  )

  return response.data
}
