"use client"

import { createContext, useReducer, useState } from "react"
import { CreateUserRequest } from "@/services/users/mutations/createUsers"
import { UpdateUserRequest } from "@/services/users/mutations/updateUsers"
import { useCreateUser, useUpdateUser } from "@/services/users/useUsersApis"
import { useQueryClient } from "@tanstack/react-query"

import type { ReactNode } from "react"
import type {
  ColumnType,
  ColumnWithoutIdAndOrderAndTasksType,
  TaskType,
  TaskWithoutIdAndOrderAndColumnIdType,
  UserContextType,
  UserType,
} from "../types"

import { teamMembersData } from "../_data/team-members"

import { UserReducer } from "../_reducers/user-reducer"

// Create Kanban context
export const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  // Reducer to manage Kanban state
  const [userState, dispatch] = useReducer(UserReducer, {
    teamMembers: teamMembersData,
    selectedColumn: undefined,
    selectedUser: undefined,
  })

  // Sidebar state management
  const [addUserSidebarIsOpen, setAddUserSidebarIsOpen] = useState(false)
  const [updateUserSidebarIsOpen, setUpdateUserSidebarIsOpen] = useState(false)

  // Handlers for task actions
  const queryClient = useQueryClient()
  const addUserMutation = useCreateUser()
  const updateUserMutation = useUpdateUser()

  const handleAddUser = (user: CreateUserRequest) => {
    addUserMutation.mutate(user, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["GetUserInfo"] })
      },
      onError: (error) => {
        console.error("Error adding user:", error)
      },
    })
  }

  const handleUpdateUser = (user: UpdateUserRequest) => {
    updateUserMutation.mutate(user, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["GetUserInfo"] })
      },
      onError: (error) => {
        console.error("Error adding user:", error)
      },
    })
  }

  const handleDeleteUser = (taskId: UserType["id"]) => {
    dispatch({ type: "deleteTask", taskId })
  }

  const handleSelectUsers = (user: UserType | undefined) => {
    dispatch({ type: "selectTask", user })
  }

  return (
    <UserContext.Provider
      value={{
        userState,
        addUserSidebarIsOpen,
        setAddUserSidebarIsOpen,
        updateUserSidebarIsOpen,
        setUpdateUserSidebarIsOpen,
        handleAddUser,
        handleUpdateUser,
        handleDeleteUser,
        handleSelectUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
