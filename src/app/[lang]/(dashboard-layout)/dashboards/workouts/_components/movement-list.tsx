"use client"

import { Exercise } from "@/models/workout"

import { MovementItem } from "./movement-item"

export function MovementList({ data }: { data: Exercise[] }) {
  return (
    <ul>
      {data.map((exercise) => (
        <MovementItem key={exercise.index} movement={exercise} />
      ))}
    </ul>
  )
}
