"use client"

import type { DictionaryType } from "@/lib/get-dictionary"
import type { ReactNode } from "react"

import { VerticalLayout } from "./vertical-layout"

export function Layout({
  children,
  dictionary,
}: {
  children: ReactNode
  dictionary: DictionaryType
}) {
  return (
    <>
      <VerticalLayout dictionary={dictionary}>{children}</VerticalLayout>
    </>
  )
}
