"use client"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"
import { Gender } from "@/types"

export interface UserInfo {
  id: string
  firstName: string
  lastName: string
  gender: Gender
  email: string
  phone: string
  birthDate: string
  address: string
  nationalId: string
  createdAt: string
}

export type UserInfoListResponse = ApiResponse<UserInfo[]>

export async function getUserInfo() {
  const response = await baseAxios.get(`${BASE_URL}/${CONTROLLERS.USER}`)
  return response.data
}
