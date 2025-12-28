import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"


import { ApiResponse } from "../../apiTypes"

export interface CreateUserRequest {
  firstName: string
  lastName: string
  phone: number
  nationalId: string
  birthDate: string
  email: string
  address: string
}

export type CreateUserResponse =
  ApiResponse<unknown>

export async function createUser(
  data: CreateUserRequest
) {
  const response = await baseAxios.post(`${BASE_URL}/${CONTROLLERS.USER}`, {
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    nationalId: data.nationalId,
    email: data.email,
    address: data.address,
  })

  return response.data
}
