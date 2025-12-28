import type { Metadata } from "next"

import { CustomerSatisfaction } from "./_components/customer-satisfaction"
import { Overview } from "./_components/overview"
import { RevenueTrend } from "./_components/revenue-trend"
import { SalesTrend } from "./_components/sales-trend"
import { TopSalesRepresentatives } from "./_components/top-sales-representatives"

// Define metadata for the page
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: "CRM",
}

export default function CRMPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <Overview />
      <SalesTrend />
      <div className="col-span-full grid gap-4 md:grid-cols-2">
        <TopSalesRepresentatives />
        <div className="grid-rows-2 gap-4 md:grid-cols-4">
          <RevenueTrend />
          <CustomerSatisfaction />
        </div>
      </div>
    </section>
  )
}
