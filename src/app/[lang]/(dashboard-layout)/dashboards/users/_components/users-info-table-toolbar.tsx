"use client"

import type { Table } from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import { UsersInfoTableViewOptions } from "./users-info-table-view-options"

interface UsersInfoTableToolbarProps<TTable> {
  table: Table<TTable>
}

export function UsersInfoTableToolbar<TTable>({
  table,
}: UsersInfoTableToolbarProps<TTable>) {
  return (
    <div className="flex gap-x-1.5">
      <UsersInfoTableViewOptions table={table} />
      <Input
        placeholder=" جستجو توسط کدملی..."
        className="border border-input bg-background hover:bg-accent hover:text-accent-foreground"
        value={
          (table.getColumn("nationalId")?.getFilterValue() as string) ?? ""
        }
        onChange={(event) =>
          table.getColumn("nationalId")?.setFilterValue(event.target.value)
        }
      />
    </div>
  )
}
