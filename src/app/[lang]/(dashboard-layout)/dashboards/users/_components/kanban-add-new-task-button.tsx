"use client"

import { Plus } from "lucide-react"

import type { ColumnType } from "../types"

import { useKanbanContext } from "../_hooks/use-kanban-context"
import { Button } from "@/components/ui/button"

interface KanbanTaskListProps {
  column: ColumnType
}

export function KanbanAddNewTaskButton() {
  const { setKanbanAddTaskSidebarIsOpen } = useKanbanContext()

  return (
    <Button
      variant="outline"
      className="w-fit my-2"
      onClick={() => {
        setKanbanAddTaskSidebarIsOpen(true)
      }}
    >
      <Plus className="me-2 size-4 text-muted-foreground" />
      افزودن کاربر جدید
    </Button>
  )
}
