"use client"

import { useState } from "react"
import { EllipsisVertical } from "lucide-react"

import type { Row } from "@tanstack/react-table"
import type { InvoiceType } from "../types"

import { deliveryStatusesData } from "../_data/invoices"

import { useKanbanContext } from "../_hooks/use-kanban-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface InvoiceTableRowActionsProps<TData> {
  row: Row<TData>
}

export function InvoiceTableRowActions<TData>({
  row,
}: InvoiceTableRowActionsProps<TData>) {
  const invoice = row.original as InvoiceType

  const [open, onOpenChange] = useState(false)
  const {
    setKanbanUpdateTaskSidebarIsOpen,
    handleSelectTask,
    handleDeleteTask,
  } = useKanbanContext()

  return (
    <div className="flex justify-end me-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 p-0.5"
            aria-label="Open actions"
          >
            <EllipsisVertical className="size-max" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            onClick={() => {
              // handleSelectTask(invoice)
              onOpenChange(false)
              setKanbanUpdateTaskSidebarIsOpen(true)
            }}
          >
            ویرایش
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={invoice.deliveryStatus}>
                {deliveryStatusesData.map((status) => (
                  <DropdownMenuRadioItem
                    key={status.value}
                    value={status.value}
                  >
                    {status.label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            حذف
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
