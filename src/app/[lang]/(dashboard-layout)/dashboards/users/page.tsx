import type { Metadata } from "next"


import { UserProvider } from "./_contexts/user-context"
import { AddNewUserSidebarButton } from "./_components/add-new-user-button"
import { UserSidebar } from "./_components/user-sidebar/index"
import { UserInfo } from "./_components/users-info"

// Define metadata for the page
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: "Ecommerce",
}

export default function EcommercePage() {
  return (
    <section className="container grid gap-3 p-3 md:grid-cols-2">
      <UserProvider>
        <UserSidebar />
        <AddNewUserSidebarButton />
        <UserInfo />
      </UserProvider>
    </section>
  )
}
