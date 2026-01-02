import { UserEnteranceData } from "../_data/user-enterance"

import { UserEnteranceTable } from "./users-enterance-table"

export function UserEnterance() {
  return (
    <article className="col-span-full">
      <UserEnteranceTable data={UserEnteranceData} />
    </article>
  )
}
