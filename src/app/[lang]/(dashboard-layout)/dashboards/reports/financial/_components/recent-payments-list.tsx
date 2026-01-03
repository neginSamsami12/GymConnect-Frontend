import type { RecentPaymentsItemType } from "../types"

import { RecentPaymentsItem } from "./recent-payments-item"
import { RecentPaymentsTop3Item } from "./recent-payments-top-3-item"

export function TopSalesRepresentativesList({
  data,
}: {
  data: RecentPaymentsItemType["payments"]
}) {
  const top3 = data.slice(0, 3)
  const others = data.slice(3)

  return (
    <ul className="space-y-2">
      {top3.map((rep, index) => (
        <RecentPaymentsTop3Item
          key={rep.name + index}
          representative={rep}
          index={index}
        />
      ))}

      {others.map((rep, index) => (
        <RecentPaymentsItem key={rep.name} payment={rep} index={index} />
      ))}
    </ul>
  )
}
