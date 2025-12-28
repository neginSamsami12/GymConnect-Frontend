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
        title: "reports",
        iconName: "Reports",
        items: [
          {
            title: "financial",
            href: "/dashboards/reports/financial",
          },
        ],
      },
    ],
  },
]
