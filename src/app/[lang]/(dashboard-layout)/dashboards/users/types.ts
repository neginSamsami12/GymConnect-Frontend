import type { FileType } from "@/types"
import type { z } from "zod"
import type { KanbanColumnSchema } from "./_schemas/kanban-column-schema"
import type { KanbanTaskSchema } from "./_schemas/kanban-task-schema"

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

export interface KanbanStateType {
  columns: ColumnType[]
  teamMembers: UserType[]
  selectedColumn?: ColumnType
  selectedTask?: TaskType
}

export interface LabelType {
  id: string
  name: string
}

export type KanbanActionType =
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

export interface KanbanContextType {
  kanbanState: KanbanStateType
  kanbanAddTaskSidebarIsOpen: boolean
  setKanbanAddTaskSidebarIsOpen: (value: boolean) => void
  kanbanUpdateTaskSidebarIsOpen: boolean
  setKanbanUpdateTaskSidebarIsOpen: (value: boolean) => void
  kanbanAddColumnSidebarIsOpen: boolean
  setKanbanAddColumnSidebarIsOpen: (value: boolean) => void
  kanbanUpdateColumnSidebarIsOpen: boolean
  setKanbanUpdateColumnSidebarIsOpen: (value: boolean) => void
  handleAddColumn: (column: ColumnWithoutIdAndOrderAndTasksType) => void
  handleUpdateColumn: (column: ColumnType) => void
  handleDeleteColumn: (columnId: ColumnType["id"]) => void
  handleAddTask: (
    task: TaskWithoutIdAndOrderAndColumnIdType,
    columnId: ColumnType["id"]
  ) => void
  handleUpdateTask: (task: TaskType) => void
  handleDeleteTask: (taskId: TaskType["id"]) => void
  handleReorderColumns: (sourceIndex: number, destinationIndex: number) => void
  handleReorderTasks: (
    sourceColumnId: string,
    sourceIndex: number,
    destinationColumnId: string,
    destinationIndex: number
  ) => void
  // handleSelectColumn: (column: ColumnType | undefined) => void
  handleSelectTask: (task: TaskType | undefined) => void
}

export type KanbanColumnFormType = z.infer<typeof KanbanColumnSchema>

export type KanbanTaskFormType = z.infer<typeof KanbanTaskSchema>

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

export interface InvoiceType {
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
