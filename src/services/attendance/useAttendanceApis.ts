import { UseMutationResult, useMutation, useQuery } from "@tanstack/react-query"

import {
  AttendanceRegistrationRequest,
  AttendanceRegistrationResponse,
  attendanceRegistration,
} from "./mutations/attendanceRegistration"
import {
  AttendanceInfoListResponse,
  getAttendanceInfo,
} from "./queries/getAttendanceList"

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
