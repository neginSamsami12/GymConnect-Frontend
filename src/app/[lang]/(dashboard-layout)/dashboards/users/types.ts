import { CreateUserRequest } from "@/services/users/mutations/createUsers"
import { UpdateUserRequest } from "@/services/users/mutations/updateUsers"

import type { FileType, UserType } from "@/types"
import type { z } from "zod"
import type { AddUserSchema } from "./_schemas/add-user-schema"
import type { UserColumnSchema } from "./_schemas/user-column-schema"

export interface UserType {
  id: string
  username: string
  name: string
  avatar?: string
}

export interface CommentType {
  id: string
  userId: string
  text: string
  createdAt: Date
}

export interface TaskType {
  id: string
  columnId: string
  order: number
  title: string
  description?: string
  label: string
  comments: CommentType[]
  assigned: UserType[]
  dueDate: Date
  attachments: FileType[]
}

export interface ColumnType {
  id: string
  order: number
  title: string
  tasks: TaskType[]
}

export type ColumnWithoutIdAndOrderAndTasksType = Omit<
  ColumnType,
  "id" | "order" | "tasks"
>

export type TaskWithoutIdAndOrderAndColumnIdType = Omit<
  TaskType,
  "id" | "order" | "columnId"
>

export interface UserStateType {
  columns: ColumnType[]
  teamMembers: UserType[]
  selectedColumn?: ColumnType
  selectedUser?: UserType
}

export interface LabelType {
  id: string
  name: string
}

export type UserActionType =
  | { type: "addColumn"; column: ColumnWithoutIdAndOrderAndTasksType }
  | { type: "updateColumn"; column: ColumnType }
  | { type: "deleteColumn"; columnId: string }
  | {
      type: "addTask"
      task: TaskWithoutIdAndOrderAndColumnIdType
      columnId: string
    }
  | { type: "updateTask"; task: TaskType }
  | { type: "deleteTask"; taskId: string }
  | { type: "reorderColumns"; sourceIndex: number; destinationIndex: number }
  | {
      type: "reorderTasks"
      source: { columnId: string; index: number }
      destination: { columnId: string; index: number }
    }
  | { type: "selectColumn"; column?: ColumnType }
  | { type: "selectTask"; task?: TaskType }

export interface UserContextType {
  userState: UserStateType
  addUserSidebarIsOpen: boolean
  setAddUserSidebarIsOpen: (value: boolean) => void
  updateUserSidebarIsOpen: boolean
  setUpdateUserSidebarIsOpen: (value: boolean) => void
  handleAddUser: (user: CreateUserRequest) => void
  handleUpdateUser: (user: UpdateUserRequest) => void
  handleDeleteUser: (UserId: UserType["id"]) => void
  handleSelectUser: (task: UserType | undefined) => void
}

export type AddUserFormType = Omit<z.infer<typeof AddUserSchema>, "attachments">

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

export interface UsersInfoType {
  invoiceId: string
  customerName: string
  orderDate: string
  dueDate: string
  totalAmount: number
  deliveryStatus: "Active" | "DeActive"
}

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
