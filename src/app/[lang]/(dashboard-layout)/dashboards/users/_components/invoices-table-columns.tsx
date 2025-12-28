"use client"

import { UserInfo } from "@/services/users/queries/getUsersList"
import { ShieldCheck, ShieldMinus } from "lucide-react"

import type { ColumnDef } from "@tanstack/react-table"
import type { InvoiceType } from "../types"

import { formatCurrency, formatDate } from "@/lib/utils"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header"
import { InvoiceTableRowActions } from "./invoice-table-row-actions"

const deliveryStatusIcons = {
  Active: ShieldCheck,
  DeActive: ShieldMinus,
}

export const invoicesTableColumns: ColumnDef<UserInfo>[] = [
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
    accessorKey: "نام و نام خانوادگی",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نام خانوادگی" />
    ),
    cell: ({ row }) => {
      const customerName = row.getValue("firstName") as string

      return (
        <span className="inline-block max-w-44 break-all truncate">
          {customerName}
        </span>
      )
    },
  },
  {
    accessorKey: "orderDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاریخ ثبت نام" />
    ),
    cell: ({ row }) => {
      const orderDate = row.getValue("orderDate") as string

      return formatDate(orderDate)
    },
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="شماره تلفن" />
    ),
    cell: ({ row }) => {
      const dueDate = row.getValue("dueDate") as string

      return <span>{formatDate(dueDate)}</span>
    },
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="کدملی" />
    ),
    cell: ({ row }) => {
      const totalAmount = row.getValue("totalAmount") as number

      return <span>{formatCurrency(totalAmount)}</span>
    },
  },
  {
    accessorKey: "deliveryStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="وضعیت" />
    ),
    cell: ({ row }) => {
      const deliveryStatus = row.getValue(
        "deliveryStatus"
      ) as InvoiceType["deliveryStatus"]
      const Icon = deliveryStatusIcons[deliveryStatus]

      return (
        <Badge>
          <Icon className="me-2 h-4 w-4" />
          <span>{deliveryStatus}</span>
        </Badge>
      )
    },
  },
  {
    id: "actions",
    header: () => <span className="sr-only">Actions</span>,
    cell: ({ row }) => <InvoiceTableRowActions row={row} />,
  },
]
