"use client"

import { useAttendanceInfo } from "@/services/attendance/useAttendanceApis"

import { UserEnteranceTable } from "./users-enterance-table"

export function UserEnterance() {
  const { data: UserEnteranceData } = useAttendanceInfo()
  return (
    <article className="col-span-full">
      <UserEnteranceTable data={UserEnteranceData?.data} />
    </article>
  )
}
