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
        iconName: "classes",
      },

      {
        title: "reports",
        iconName: "Reports",
        items: [
          {
            title: "financial",
            href: "/dashboards/reports/financial",
          },
          {
            title: "presence",
            href: "/dashboards/reports/presence",
          },
        ],
      },
      {
        title: "workouts",
        iconName: "workouts",
        items: [
          {
            title: "design",
            href: "/dashboards/workouts/design",
          },
          {
            title: "list",
            href: "/dashboards/workouts/list",
          },
        ],
      },
    ],
  },
]
