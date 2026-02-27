import type { RevenueType } from "../types"

export const revenueTrendData: RevenueType = {
  period: "2024",
  summary: {
    totalRevenue: 80000,
    totalPercentageChange: 0.25,
  },
  revenueTrends: [
    { month: "فرودین", revenue: 5000 },
    { month: "اردیبهشت", revenue: 5500 },
    { month: "خرداد", revenue: 5000 },
    { month: "تیر", revenue: 6000 },
    { month: "مرداد", revenue: 6500 },
    { month: "شهریور", revenue: 7000 },
    { month: "مهر", revenue: 7250 },
    { month: "آبان", revenue: 7250 },
    { month: "آذر", revenue: 6500 },
    { month: "دی", revenue: 6000 },
    { month: "بهمن", revenue: 7000 },
    { month: "اسفند", revenue: 8000 },
  ],
}
