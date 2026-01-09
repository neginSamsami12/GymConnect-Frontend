"use client"

import { createContext, useState } from "react"
import { CreateUserRequest } from "@/services/users/mutations/createUsers"
import { UpdateUserRequest } from "@/services/users/mutations/updateUsers"
import { useCreateUser, useUpdateUser } from "@/services/users/useUsersApis"
import { useQueryClient } from "@tanstack/react-query"

import type { ReactNode } from "react"
import type {
  UserContextType,
} from "../types"
import { UserInfo } from "@/services/users/queries/getUsersList"

export const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {

  const [addUserSidebarIsOpen, setAddUserSidebarIsOpen] = useState(false)
  const [updateUserSidebarIsOpen, setUpdateUserSidebarIsOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserInfo | undefined>(undefined)

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

  const handleUpdateUser = (user: UpdateUserRequest, id: string) => {
    updateUserMutation.mutate({data: user, id: id}, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["GetUserInfo"] })
      },
      onError: (error) => {
        console.error("Error adding user:", error)
      },
    })
  }

  const handleDeleteUser = (userId: UserInfo["id"]) => {
    
  }

  return (
    <UserContext.Provider
      value={{
        addUserSidebarIsOpen,
        setAddUserSidebarIsOpen,
        updateUserSidebarIsOpen,
        setUpdateUserSidebarIsOpen,
        handleAddUser,
        handleUpdateUser,
        handleDeleteUser,
        selectedUser,
        setSelectedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
