import type { AttendanceReportType } from "../types"

export const attendanceReportData: AttendanceReportType[] = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Paid", method: "PayPal", amount: "$150.00" },
  {
    id: "INV003",
    status: "Paid",
    method: "Bank Transfer",
    amount: "$300.00",
  },
]
