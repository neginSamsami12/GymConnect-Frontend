"use client"

import { Gender } from "@/types"

import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

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
  registrationDate: string
  isActive: boolean
}

export type UserInfoListResponse = ApiResponse<UserInfo[]>

export async function getUserInfo() {
  const response = await baseAxios.get(`${BASE_URL}/${CONTROLLERS.USER}`)
  return response.data
}
