import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface UserInfoById {
  id: string
  name: string
  lastName: string
  email: string
  phone: string
  birthDate: string
  address: string
  nationalId: string
  createdAt: string
}

export type UserInfoResponse = ApiResponse<UserInfoById>

export async function getUserById(id: string) {
  const response = await baseAxios.get(`${BASE_URL}/${CONTROLLERS.USER}/${id}`)
  return response.data
}
