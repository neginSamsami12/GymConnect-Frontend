"use client"

import { UserInfo } from "@/services/users/queries/getUsersList"
import { ShieldCheck, ShieldMinus } from "lucide-react"

import type { ColumnDef } from "@tanstack/react-table"
import type { UsersInfoType } from "../types"

import { formatCurrency, formatDate } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header"
import { UsersInfoTableRowActions } from "./users-info-table-row-actions"

const deliveryStatusIcons = {
  Active: ShieldCheck,
  DeActive: ShieldMinus,
}

export const UsersInfoTableColumns: ColumnDef<UserInfo>[] = [
  {
    id: "نام",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        className="ms-4"
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        className="ms-4"
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "profilePicture",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تصویر کاربر" />
    ),
    cell: (row) => {
      const invoiceId = row.getValue() as string

      return <span className="text-primary">#{invoiceId}</span>
    },
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نام خانوادگی" />
    ),
    cell: ({ row }) => {
      const customerName =
        // row.original.firstName as string
        `${row.original.firstName} ${row.original.lastName}`

      return (
        <span className="inline-block max-w-44 break-all truncate">
          {customerName}
        </span>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاریخ ثبت نام" />
    ),
    cell: ({ row }) => {
      const registerDate = row.original.createdAt as string

      return registerDate ? formatDate(registerDate) : null
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره تلفن" />
    ),
    cell: ({ row }) => {
      const dueDate = row.getValue("phone") as string

      return dueDate
    },
  },
  {
    accessorKey: "nationalId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="کدملی" />
    ),
    cell: ({ row }) => {
      const totalAmount = row.getValue("nationalId") as number

      return totalAmount
    },
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وضعیت" />
    ),
    cell: ({ row }) => {
      const st = row.original.createdAt
      const status = st ? "Active" : "DeActive"
      const Icon = deliveryStatusIcons[status]

      return (
        <Badge>
          <Icon className="me-2 h-4 w-4" />
          <span>{status}</span>
        </Badge>
      )
    },
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => <UsersInfoTableRowActions row={row} />,
  },
]
