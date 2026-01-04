import type { NavigationType } from "@/types"

export const navigationsData: NavigationType[] = [
  {
    title: "Main",
    items: [
      {
        title: "Home",
        href: "/",
        iconName: "House",
      },
      {
        title: "Users",
        href: "/dashboards/users",
        iconName: "Users",
      },
      {
        title: "classes",
        href: "/dashboards/classes",
        iconName: "Dumbbell",
      },

      {
        title: "reports",
        iconName: "ClipboardMinus",
        items: [
          {
            title: "financial",
            iconName: "BadgeDollarSign",
            href: "/dashboards/reports/financial",
          },
          {
            title: "presence",
            iconName: "UserCheck",
            href: "/dashboards/reports/presence",
          },
        ],
      },
      {
        title: "workouts",
        iconName: "LayoutGrid",
        items: [
          {
            title: "design",
            iconName: "ListTodo",
            href: "/dashboards/workouts/design",
          },
          {
            title: "list",
            iconName: "ListFilter",
            href: "/dashboards/workouts/list",
          },
        ],
      },
      {
        title: "Calendar",
        href: "/dashboards/calendar",
        iconName: "Calendar",
      },
    ],
  },
]
