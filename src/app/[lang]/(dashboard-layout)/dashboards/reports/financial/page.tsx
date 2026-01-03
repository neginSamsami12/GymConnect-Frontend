import type { Metadata } from "next"

import { OnlinePayment } from "./_components/online-payment"
import { Overview } from "./_components/overview"
import { RevenueTrend } from "./_components/revenue"
import { Sales } from "./_components/sales"
import { RecentPayments } from "./_components/recent-payments"

// Define metadata for the page
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: "CRM",
}

export default function CRMPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <Overview />
      <Sales />
      <div className="col-span-full grid gap-4 md:grid-cols-2">
        <RecentPayments />
        <div className="grid-rows-2 gap-4 md:grid-cols-4">
          <RevenueTrend />
          <OnlinePayment />
        </div>
      </div>
    </section>
  )
}
