"use client"

import { Plus } from "lucide-react"

import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { CardWithImageHorizontal } from "./_components/card-with-image-horizontal"

// export const metadata: Metadata = {
//   title: "classes",
// }

export default function BasicCardsPage() {
  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <Button
        variant="outline"
        className="w-fit my-2"
        onClick={() => (window.location.href = "/dashboards/classes/add")}
      >
        <Plus className="me-2 size-4 text-muted-foreground" />
        افزودن کلاس جدید
      </Button>

      <div className="space-y-4 md:col-span-full">
        <div className="grid grid-cols-1 gap-4 ">
          <CardWithImageHorizontal />
          <CardWithImageHorizontal />
          <CardWithImageHorizontal />
          <CardWithImageHorizontal />
          <CardWithImageHorizontal />
          <CardWithImageHorizontal />
          <CardWithImageHorizontal />
        </div>
      </div>
    </section>
  )
}
