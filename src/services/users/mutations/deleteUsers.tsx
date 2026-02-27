import { Gender } from "@/types"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export type UserInfoResponse = ApiResponse<string>

export async function deleteUser(id: string) {
  const response = await baseAxios.delete(
    `${BASE_URL}/${CONTROLLERS.USER}/${id}`
  )
  return response.data
}
