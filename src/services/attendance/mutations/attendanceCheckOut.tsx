import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export type AttendanceCheckOutResponse = ApiResponse<unknown>

export async function AttendanceCheckOut(id: string) {
  const response = await baseAxios.post(
    `${BASE_URL}/${CONTROLLERS.Attendance}/check-out/${id}`
  )
  return response.data
}
