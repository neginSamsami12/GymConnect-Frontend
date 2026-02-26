// Define metadata for the page
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

import { CustomerInsights } from "./_components/customer-insights"
import { GenderDistribution } from "./_components/gender-distribution"
import { UserEnterance } from "./_components/users-enterance"
import { VisitOverTime } from "./_components/visitOverTime"

export default function HomePage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <div className="col-span-full grid gap-4 md:grid-cols-4">
        <CustomerInsights />
        <GenderDistribution />
      </div>
      <UserEnterance />
      <div className="col-span-2">
        <VisitOverTime />
      </div>
    </section>
  )
}
