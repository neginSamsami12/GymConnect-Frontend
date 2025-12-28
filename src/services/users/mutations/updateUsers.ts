import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface UpdateUserRequest {
  firstName: string
  lastName: string
  phone: number
  birthDate: string
  email: string
  address: string
}

export type UpdateUserResponse =
  ApiResponse<unknown>

export async function updateUser(
    id: string,
    data: UpdateUserRequest
  ) {
  const response = await baseAxios.put(`${BASE_URL}/${CONTROLLERS.USER}/${id}`, {
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    email: data.email,
    address: data.address,
  })

  return response.data
}
