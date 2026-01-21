import { UseMutationResult, useMutation, useQuery } from "@tanstack/react-query"

import {
  AttendanceRegistrationRequest,
  AttendanceRegistrationResponse,
  attendanceRegistration,
} from "./mutations/attendanceRegistration"

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
    mutationKey: ["CreateClass"],
    mutationFn: (data: AttendanceRegistrationRequest) =>
      attendanceRegistration(data),
  })

  return query
}
