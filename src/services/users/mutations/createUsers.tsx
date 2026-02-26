import { Gender } from "@/types"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface CreateUserRequestData {
  firstName: string
  lastName: string
  gender: Gender
  email?: string
  phone?: string
  birthDate: string // "YYYY-MM-DD"
  address?: string
  nationalId: string
}

export interface CreateUserRequest extends CreateUserRequestData {
  image?: File
}

export type CreateUserResponse = ApiResponse<unknown>

export async function createUser(
  req: CreateUserRequest
): Promise<CreateUserResponse> {
  const form = new FormData()

  const { image, ...userData } = req
  form.set(
    "data",
    new Blob([JSON.stringify(userData)], { type: "application/json" })
  )

  if (req.image) {
    form.append("image", req.image)
  }

  const response = await baseAxios.post(`${BASE_URL}/${CONTROLLERS.USER}`, form)

  return response.data
}
