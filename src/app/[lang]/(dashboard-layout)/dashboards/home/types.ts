import type { DynamicIconNameType } from "@/types"

export interface VisitorsByCountryDataType {
  summary: {
    totalVisitors: number
  }
  countries: Array<{
    countryName: string
    countryCode: string
    visitors: number
    percentageChange: number
  }>
}

export interface MetricType {
  averageValue: number
  percentageChange: number
  perMonth: Array<{ month: string; value: number; fill?: string }>
}

export interface OverviewType {
  uniqueVisitors: MetricType
  averageSessionDuration: MetricType
  bounceRate: MetricType
  conversionRate: MetricType
}

export interface TrafficSourcesType {
  period: string
  sources: Array<{
    name: string
    visitors: number
    fill: string
    percentageChange: number
    icon: DynamicIconNameType
  }>
}

export type ConversionFunnelType = {
  period: string
  funnelSteps: Array<{
    name: string
    value: number
  }>
}

export interface VisitOverTimeType {
  summary: {
    totalVisitors: number
    totalConversions: number
  }
  performance: Array<{
    month: string
    بازدیدکنندگان: number
    پیام‌ها: number
  }>
}

export interface NewVsReturningVisitorsType {
  visitors: {
    new: {
      value: number
      percentageChange: number
      fill: string
    }
    returning: {
      value: number
      percentageChange: number
      fill: string
    }
  }
}

export interface GenderDistributionType {
  name: string
  value: number
  percentage: number
  fill: string
  x: number
  y: number
}

export interface CustomerInsightsType {
  period: string
  totalCustomers: number
  newCustomers: number
  returningCustomers: number
  vipCustomers: number
}
