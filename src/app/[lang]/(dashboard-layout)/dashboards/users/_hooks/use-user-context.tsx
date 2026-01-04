"use client"

import { useContext } from "react"

import { UserContext } from "../_contexts/user-context"

export function useUserContext() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useKanbanContext must be used within a KanbanProvider")
  }
  return context
}
