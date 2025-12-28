import { ChevronDown } from "lucide-react"

import { performanceOverTimeData } from "../_data/performance-over-time"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DashboardCard } from "@/components/dashboards/dashboard-card"
import { PerformanceOverTimeChart } from "./performance-over-time-chart"
import { PerformanceOverTimeSummary } from "./performance-over-time-summary"

function PerformanceOverTimeActionButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "w-24 justify-between [&[data-state=open]>svg]:rotate-180"
        )}
      >
        <span>2024</span>
        <ChevronDown className="h-4 w-4 shrink-0 ms-2 transition-transform duration-200" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-24">
        <DropdownMenuRadioGroup value="2024">
          <DropdownMenuRadioItem value="1404">1404</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1403">1403</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="1402">1402</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function PerformanceOverTime() {
  return (
    <DashboardCard
      title="آمار بازدید"
      action={<PerformanceOverTimeActionButton />}
    >
      <PerformanceOverTimeSummary data={performanceOverTimeData.summary} />
      <PerformanceOverTimeChart data={performanceOverTimeData.performance} />
    </DashboardCard>
  )
}
