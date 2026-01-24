"use client"

import { AttendanceInfo } from "@/services/attendance/queries/getAttendanceList"
import { useAttendanceCheckOut } from "@/services/attendance/useAttendanceApis"
import { useQueryClient } from "@tanstack/react-query"

import type { DynamicIconNameType } from "@/types"
import type { ColumnDef } from "@tanstack/react-table"

import { formatDuration, formatPercent } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header"
import { Progress } from "@/components/ui/progress"
import { DynamicIcon } from "@/components/dynamic-icon"

function RenderValueWithIcon({
  value,
  iconName,
}: {
  value: number | string
  iconName: DynamicIconNameType
}) {
  return (
    <div className="flex items-center gap-x-2">
      <DynamicIcon name={iconName} className="h-3 w-3" />
      <span>{value}</span>
    </div>
  )
}

export const UserEnteranceTableColumns: ColumnDef<AttendanceInfo>[] = [
  {
    id: "firstName",
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="نام" className="ms-4" />
    ),
    cell: ({ row }) => {
      const firstName = row.getValue("firstName") as string

      return <span className="ms-4 text-primary">{firstName}</span>
    },
  },
  {
    id: "lastName",
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="نام خانوادگی"
        className="ms-4"
      />
    ),
    cell: ({ row }) => {
      const lastName = row.getValue("lastName") as string

      return <span className="ms-4 text-primary">{lastName}</span>
    },
  },
  {
    id: "className",
    accessorKey: "className",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" کلاس" className="ms-4" />
    ),
    cell: ({ row }) => {
      const className = row.getValue("className") as string

      return <span className="ms-4 text-primary">{className}</span>
    },
  },
  {
    id: "checkInTime",
    accessorKey: "checkInTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="زمان ورود" />
    ),
    cell: ({ row }) => {
      const checkInTime = row.getValue("checkInTime") as number

      return <RenderValueWithIcon value={checkInTime} iconName="Clock" />
    },
  },
  {
    id: "checkOutTime",
    accessorKey: "checkOutTime",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="زمان خروج" />
    ),
    cell: ({ row }) => {
      const checkOutTime = row.getValue("checkOutTime") as number
      const mutate = useAttendanceCheckOut()
      const queryClient = useQueryClient()

      function handleCheckOut(id: string) {
        mutate.mutate(id, {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["GetAttendanceInfo"] })
          },
        })
      }
      if (checkOutTime == undefined || checkOutTime == null) {
        return (
          <Button onClick={() => handleCheckOut(row.original.id)}>
            ثبت خروج
          </Button>
        )
      }
      return <RenderValueWithIcon value={checkOutTime} iconName="Clock" />
    },
  },
]
