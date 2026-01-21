"use client"

import { EllipsisVertical } from "lucide-react"

import type { Row } from "@tanstack/react-table"
import { UserInfo } from "@/services/users/queries/getUsersList"

import { useUserContext } from "../_hooks/use-user-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface UsersInfoTableRowActionsProps<TData> {
  row: Row<TData>
}

export function UsersInfoTableRowActions<TData>({
  row,
}: UsersInfoTableRowActionsProps<TData>) {
  const user = row.original as UserInfo

  const {
    setUpdateUserSidebarIsOpen,
    setSelectedUser,
    handleDeleteUser,
  } = useUserContext()

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
              setSelectedUser(user)
              setUpdateUserSidebarIsOpen(true)
            }}
          >
            ویرایش
          </DropdownMenuItem>
          <DropdownMenuItem className="text-destructive focus:text-destructive">
            حذف
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
