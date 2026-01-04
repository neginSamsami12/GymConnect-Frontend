"use client"

import { Plus } from "lucide-react"

import type { ColumnType } from "../types"

import { useUserContext } from "../_hooks/use-user-context"
import { Button } from "@/components/ui/button"

interface KanbanTaskListProps {
  column: ColumnType
}

export function AddNewUserSidebarButton() {
  const { setAddUserSidebarIsOpen } = useUserContext()

  return (
    <Button
      variant="outline"
      className="w-fit my-2"
      onClick={() => {
        setAddUserSidebarIsOpen(true)
      }}
    >
      <Plus className="me-2 size-4 text-muted-foreground" />
      افزودن کاربر جدید
    </Button>
  )
}
