"use client"

import { ShieldCheck, ShieldMinus } from "lucide-react"

import type { ColumnDef } from "@tanstack/react-table"
import type { UsersInfoColumnType } from "../types"

import { formatDate, formatDateJalali } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header"
import { UsersInfoTableRowActions } from "./users-info-table-row-actions"

const deliveryStatusIcons = {
  Active: ShieldCheck,
  DeActive: ShieldMinus,
}

export const UsersInfoTableColumns: ColumnDef<UsersInfoColumnType>[] = [
  {
    id: "select",
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
    accessorKey: "تصویر کاربر",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تصویر کاربر" />
    ),
    cell: (row) => {
      const invoiceId = row.getValue() as string

      return <span className="text-primary">#{invoiceId}</span>
    },
  },
  {
    accessorKey: "نام",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نام" />
    ),
    cell: ({ row }) => {
      const customerName = `${row.original.firstName} ${row.original.lastName}`

      return (
        <span className="inline-block max-w-44 break-all truncate">
          {customerName}
        </span>
      )
    },
  },
  {
    accessorKey: "تاریخ ثبت نام",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاریخ ثبت نام" />
    ),
    cell: ({ row }) => {
      const registerDate = row.original.registrationDate as string

      return registerDate ? formatDateJalali(registerDate) : null
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
    accessorKey: "isActive",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وضعیت" />
    ),
    cell: ({ row }) => {
      const status = row.original.isActive
      const Icon = deliveryStatusIcons[status ? "Active" : "DeActive"]

      return (
        <Badge>
          <Icon className="me-2 h-4 w-4" />
          <span>{status ? "فعال" : "غیرفعال"}</span>
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
