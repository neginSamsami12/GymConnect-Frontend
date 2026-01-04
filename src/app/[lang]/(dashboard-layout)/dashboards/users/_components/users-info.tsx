import { useGetUserInfo } from "@/services/users/useUsersApis"

import { usersInfoData } from "../_data/users-info"

import { UsersInfoTable } from "./users-info-table"

export function UserInfo() {
  return (
    <article className="col-span-full">
      <UsersInfoTable />
    </article>
  )
}
