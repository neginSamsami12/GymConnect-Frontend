import { UseMutationResult, useMutation, useQuery } from "@tanstack/react-query"

import {
  AttendanceCheckOut,
  AttendanceCheckOutResponse,
} from "./mutations/attendanceCheckOut"
import {
  AttendanceRegistrationRequest,
  AttendanceRegistrationResponse,
  attendanceRegistration,
} from "./mutations/attendanceRegistration"
import {
  AttendanceInfoListResponse,
  getAttendanceInfo,
} from "./queries/getAttendanceList"
import {
  AttendanceWeeklyInfoListResponse,
  getAttendanceWeeklyInfo,
} from "./queries/getWeeklyAttendanceList"

export const useAttendanceRegistration = (): UseMutationResult<
  AttendanceRegistrationResponse,
  Error,
  AttendanceRegistrationRequest
> => {
  const query = useMutation<
    AttendanceRegistrationResponse,
    Error,
    AttendanceRegistrationRequest
  >({
    mutationKey: ["AttendanceRegistration"],
    mutationFn: (data: AttendanceRegistrationRequest) =>
      attendanceRegistration(data),
  })

  return query
}

export const useAttendanceInfo = () => {
  const query = useQuery<AttendanceInfoListResponse>({
    queryKey: ["GetAttendanceInfo"],
    queryFn: () => getAttendanceInfo(),
  })
  return query
}

export const useAttendanceCheckOut = (): UseMutationResult<
  AttendanceCheckOutResponse,
  Error,
  string
> => {
  const query = useMutation<AttendanceCheckOutResponse, Error, string>({
    mutationKey: ["AttendanceCheckOut"],
    mutationFn: (id: string) => AttendanceCheckOut(id),
  })

  return query
}

export const useAttendanceWeeklyInfo = () => {
  const query = useQuery<AttendanceWeeklyInfoListResponse>({
    queryKey: ["GetAttendanceWeeklyInfo"],
    queryFn: () => getAttendanceWeeklyInfo(),
  })
  return query
}
