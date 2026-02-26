"use client"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface AttendanceWeeklyInfo {
  id: string
  firstName: string
  lastName: string
  className: string
  date: string
}

export type AttendanceWeeklyInfoListResponse = ApiResponse<
  AttendanceWeeklyInfo[]
>

export async function getAttendanceWeeklyInfo() {
  const response = await baseAxios.get(
    `${BASE_URL}/${CONTROLLERS.Attendance}/week`
  )
  return response.data
}
