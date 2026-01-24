"use client"

import { useRouter } from "next/navigation"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ClassCard } from "./_components/classCard"
import { useGetClassesInfo } from "@/services/classes/useClassesApis"

export default function BasicCardsPage() {
  const { data } = useGetClassesInfo();
  const router = useRouter()

  return (
    <section className="container grid gap-4 p-4 md:grid-cols-2">
      <Button
        variant="outline"
        className="my-2 w-fit"
        onClick={() => router.push("/dashboards/classes/add")}
      >
        <Plus className="me-2 size-4 text-muted-foreground" />
        افزودن کلاس جدید
      </Button>

      <div className="space-y-4 md:col-span-full">
        <div className="grid grid-cols-1 gap-4">
          {data?.data?.map((classInfo) => (
            <ClassCard key={classInfo.id} data={classInfo} />
          ))}
        </div>
      </div>
    </section>
  )
}
