"use client"

import type { DynamicIconNameType } from "@/types"
import type { ColumnDef } from "@tanstack/react-table"
import type { UserEnteranceType } from "../types"

import { formatDuration, formatPercent } from "@/lib/utils"

import { DataTableColumnHeader } from "@/components/ui/data-table/data-table-column-header"
import { Progress } from "@/components/ui/progress"
import { DynamicIcon } from "@/components/dynamic-icon"

function RenderPercentageValue({ value }: { value: number }) {
  const formattedpercentage = formatPercent(value)

  return (
    <div className="max-w-32 flex items-center gap-x-2">
      <Progress value={value * 100} />
      <span>{formattedpercentage}</span>
    </div>
  )
}

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

export const UserEnteranceTableColumns: ColumnDef<UserEnteranceType>[] =
  [
    {
      id: "deviceType",
      accessorKey: "deviceType",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="نام" className="ms-4" />
      ),
      cell: ({ row }) => {
        const deviceType = row.getValue("deviceType") as string

        return <span className="ms-4 text-primary">{deviceType}</span>
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
      id: "bounceRate",
      accessorKey: "bounceRate",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title=" کلاس"
          className="ms-4"
        />
      ),
      cell: ({ row }) => {
        const bounceRate = row.getValue("bounceRate") as string

        return <span className="ms-4 text-primary">{bounceRate}</span>
      },
    },
    {
      id: "sessionDuration",
      accessorKey: "sessionDuration",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="زمان ورود" />
      ),
      cell: ({ row }) => {
        const sessionDuration = row.getValue("sessionDuration") as number

        return (
          <RenderValueWithIcon
            value={sessionDuration}
            iconName="Clock"
          />
        )
      },
    },
    {
      id: "leaveTime",
      accessorKey: "leaveTime",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="زمان خروج" />
      ),
      cell: ({ row }) => {
        const leaveTime = row.getValue("leaveTime") as number

        return (
          <RenderValueWithIcon
            value={leaveTime}
            iconName="Clock"
          />
        )
      },
    },
  ]
