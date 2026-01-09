import { CreateUserRequest } from "@/services/users/mutations/createUsers"
import { UpdateUserRequest } from "@/services/users/mutations/updateUsers"

import type { z } from "zod"
import type { UserSchema } from "./_schemas/user-schema"
import { UserInfo } from "@/services/users/queries/getUsersList"

export interface UserContextType {
  addUserSidebarIsOpen: boolean
  setAddUserSidebarIsOpen: (value: boolean) => void
  updateUserSidebarIsOpen: boolean
  setUpdateUserSidebarIsOpen: (value: boolean) => void
  handleAddUser: (user: CreateUserRequest) => void
  handleUpdateUser: (user: UpdateUserRequest, id: string) => void
  handleDeleteUser: (UserId: UserInfo["id"]) => void
  selectedUser: UserInfo | undefined
  setSelectedUser: (value: UserInfo | undefined) => void
}

export type AddUserFormType = z.infer<typeof UserSchema>

export interface MetricType {
  value: number
  percentageChange: number
  period: string
}

export interface OverviewType {
  totalSales: MetricType
  revenueSummary: MetricType
  numberOfOrders: MetricType
  averageOrderValue: MetricType
}

export interface SalesTrendType {
  period: string
  summary: {
    lowestSales: { date: number; sales: number }
    highestSales: { date: number; sales: number }
    avgSales: number
    totalSales: number
  }
  salesTrends: Array<{ date: number; sales: number }>
}

export interface TopProductType {
  period: string
  products: Array<{
    name: string
    sales: {
      value: number
      percentageChange: number
    }
    revenue: {
      value: number
      percentageChange: number
    }
    order: number
    image: string
    sku: string
  }>
}

export interface CustomerInsightsType {
  period: string
  totalCustomers: number
  newCustomers: number
  returningCustomers: number
  vipCustomers: number
}

export type UsersInfoColumnType = Omit<
  UserInfo,
  "gender" | "email" | "birthDate" | "address"
>

export interface RevenueBySourceType {
  period: string
  summary: {
    totalRevenue: number
    percentageChange: number
  }
  sources: Array<{
    name: string
    value: number
    percentage: number
    fill: string
  }>
}

export interface ChurnRateType {
  period: string
  summary: {
    totalCustomers: number
    totalLostCustomers: number
    averageChurnRate: number
  }
  months: Array<{
    month: string
    totalCustomers: number
    lostCustomers: number
    churnRate: number
  }>
}
