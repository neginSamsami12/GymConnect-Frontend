import type { DictionaryType } from "@/lib/get-dictionary"
import type { ReactNode } from "react"

import { LandingHeader } from "./landing-header"
import { Footer } from "@/components/layout/footer"

export function Layout({
  children,
  dictionary,
}: {
  children: ReactNode
  dictionary: DictionaryType
}) {
  return (
    <div className="grow">
      <LandingHeader dictionary={dictionary} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
