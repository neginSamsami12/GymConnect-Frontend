"use client"

import Image from "next/image"

import type { MovementType } from "../types"

import { formatCurrency } from "@/lib/utils"

import { Card } from "@/components/ui/card"

export function MovementItem({
  movement,
}: {
  movement: MovementType["movements"][0]
}) {
  return (
    <Card className="grid overflow-hidden mt-5" asChild>
      <li>
        <div className="flex flex-col truncate">
          <h3 className="break-all truncate flex justify-center mt-4">
            <span>#{movement.order}</span>
            <span className="font-semibold">{movement.name}</span>
          </h3>
          <p className="text-sm text-muted-foreground mb-5 mt-5 mr-5">
            توضیحات حرکت:{movement.sku}
          </p>
        </div>
        <div className="flex justify-between bg-accent p-2 truncate">
          <p className="text-accent-foreground">
            <span className="text-muted-foreground">تعداد ست: </span>
            <span className="font-semibold">
              {movement.sales.value.toLocaleString()}
            </span>
          </p>
          <p className="text-accent-foreground">
            <span className="text-muted-foreground">تعداد تکرار: </span>
            <span className="font-semibold">
              {formatCurrency(movement.revenue.value)}
            </span>
          </p>
        </div>
      </li>
    </Card>
  )
}
