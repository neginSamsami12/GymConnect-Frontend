import { KanbanAddTaskSidebar } from "./kanban-add-task-sidebar"
import { KanbanUpdateTaskSidebar } from "./kanban-update-task-sidebar"

export function KanbanSidebar() {
  return (
    <>
      <KanbanAddTaskSidebar />
      <KanbanUpdateTaskSidebar />
    </>
  )
}
