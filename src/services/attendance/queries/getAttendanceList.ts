"use client"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface AttendanceInfo {
  id: string
  firstName: string
  lastName: string
  className: string
  checkInTime: string
  checkOutTime: string
}

export type AttendanceInfoListResponse = ApiResponse<AttendanceInfo[]>

export async function getAttendanceInfo() {
  const response = await baseAxios.get(
    `${BASE_URL}/${CONTROLLERS.Attendance}/today`
  )
  return response.data
}
