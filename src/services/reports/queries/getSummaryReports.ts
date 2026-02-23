"use client"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export interface SummaryReportsInfo {
  totalSells: number
  totalProfit: number
  incomeGrowth: number
  newUser: number
}

export type SummaryReportsInfoResponse = ApiResponse<SummaryReportsInfo>

export async function getSummaryReportsInfo() {
  const response = await baseAxios.get(
    `${BASE_URL}/${CONTROLLERS.REPORTS}/summary`
  )
  return response.data
}
