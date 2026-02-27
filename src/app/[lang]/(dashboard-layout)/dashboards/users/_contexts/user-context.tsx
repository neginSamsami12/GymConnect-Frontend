"use client"

import { createContext, useState } from "react"
import { CreateUserRequest } from "@/services/users/mutations/createUsers"
import { deleteUser } from "@/services/users/mutations/deleteUsers"
import { UpdateUserRequest } from "@/services/users/mutations/updateUsers"
import { UserInfo } from "@/services/users/queries/getUsersList"
import {
  useCreateUser,
  useDeleteUser,
  useUpdateUser,
} from "@/services/users/useUsersApis"
import { useQueryClient } from "@tanstack/react-query"

import type { ReactNode } from "react"
import type { UserContextType } from "../types"

export const UserContext = createContext<UserContextType | undefined>(undefined)

interface UserProviderProps {
  children: ReactNode
}

export function UserProvider({ children }: UserProviderProps) {
  const [addUserSidebarIsOpen, setAddUserSidebarIsOpen] = useState(false)
  const [updateUserSidebarIsOpen, setUpdateUserSidebarIsOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<UserInfo | undefined>(
    undefined
  )

  const queryClient = useQueryClient()
  const addUserMutation = useCreateUser()
  const updateUserMutation = useUpdateUser()
  const DeleteUser = useDeleteUser()

  const handleAddUser = (user: CreateUserRequest) => {
    addUserMutation.mutate(user, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["GetUserInfo"] })
      },
    })
  }

  const handleUpdateUser = (user: UpdateUserRequest, id: string) => {
    updateUserMutation.mutate(
      { data: user, id: id },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({ queryKey: ["GetUserInfo"] })
        },
      }
    )
  }

  const handleDeleteUser = (userId: UserInfo["id"]) => {
    DeleteUser.mutate(
      {
        id: userId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["GetUserInfo"] })
        },
      }
    )
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
