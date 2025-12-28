import type { Metadata } from "next"

import { kanbanData } from "./_data/kanban"

import { KanbanProvider } from "./_contexts/kanban-context"
import { Invoices } from "./_components/invoices"
import { KanbanAddNewTaskButton } from "./_components/kanban-add-new-task-button"
import { KanbanSidebar } from "./_components/kanban-sidebar/index"

// Define metadata for the page
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: "Ecommerce",
}

export default function EcommercePage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <KanbanProvider kanbanData={kanbanData}>
        <div className="col-span-full grid gap-4 md:grid-cols-4"></div>

        <KanbanSidebar />
        <KanbanAddNewTaskButton/>
        <Invoices />
      </KanbanProvider>
    </section>
  )
}
