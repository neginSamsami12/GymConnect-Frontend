"use client"

import type { MovementType } from "../types"

import { MovementItem } from "./movement-item"

export function MovementList({
  data,
}: {
  data: MovementType["movements"]
}) {
  return (
    <ul>
      {data.map((movement) => (
        <MovementItem key={movement.sku} movement={movement} />
      ))}
    </ul>
  )
}
