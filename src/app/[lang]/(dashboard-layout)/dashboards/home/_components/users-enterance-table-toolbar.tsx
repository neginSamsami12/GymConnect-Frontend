"use client"

import type { Table } from "@tanstack/react-table"

import { UsersEnteranceTableViewOptions } from "./users-enterance-table-view-options"

interface UserEnteranceTableToolbarProps<TTable> {
  table: Table<TTable>
}

export function UserEnteranceTableToolbar<TTable>({
  table,
}: UserEnteranceTableToolbarProps<TTable>) {
  return (
    <div>
      <UsersEnteranceTableViewOptions table={table} />
    </div>
  )
}
