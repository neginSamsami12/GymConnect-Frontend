"use client"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface ClassInfo {
  id: string
  trainerId: string
  title: string
  description: string
  capacity: number
  days: string
  scheduleTime: string
  startDate: string
  endDate: string
  price: number
  imageUrl: string
}

export type ClassInfoListResponse = ApiResponse<ClassInfo[]>

export async function getClassInfo(id?: string) {
  const response = await baseAxios.get(
    `${BASE_URL}/${CONTROLLERS.CLASSES}${id ? `?athleteId=${id}` : ""}`
  )
  return response.data
}
