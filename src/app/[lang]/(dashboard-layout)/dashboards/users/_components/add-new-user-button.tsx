"use client"

import { Plus } from "lucide-react"

import { useUserContext } from "../_hooks/use-user-context"
import { Button } from "@/components/ui/button"

export function AddNewUserSidebarButton() {
  const { setAddUserSidebarIsOpen } = useUserContext()

  return (
    <Button
      variant="outline"
      className="w-fit"
      onClick={() => {
        setAddUserSidebarIsOpen(true)
      }}
    >
      <Plus className="me-2 size-4 text-muted-foreground" />
      افزودن کاربر جدید
    </Button>
  )
}
