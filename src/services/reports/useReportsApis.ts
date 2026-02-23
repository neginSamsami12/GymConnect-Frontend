import { useQuery } from "@tanstack/react-query"
import { getSummaryReportsInfo, SummaryReportsInfoResponse } from "./queries/getSummaryReports"

export const useGetSummaryReportsInfo = () => {
  const query = useQuery<SummaryReportsInfoResponse>({
    queryKey: ["GetSummaryReportsInfo"],
    queryFn: getSummaryReportsInfo,
  })
  return query
}