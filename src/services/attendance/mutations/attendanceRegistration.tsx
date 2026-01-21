import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import { ApiResponse } from "../../apiTypes"
import baseAxios from "@/configs/axios/BaseAxios"

export interface AttendanceRegistrationRequest {
    userId: string,
    classId : string
}

export type AttendanceRegistrationResponse = ApiResponse<unknown>


export async function attendanceRegistration(req: AttendanceRegistrationRequest) {

  const response = await baseAxios.post(`${BASE_URL}/${CONTROLLERS.Attendance}`, req)
  return response.data
}