import type { Metadata } from "next"

import { FormLayouts } from "./_components"

// Define metadata for the page
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: "مشخصات کلاس ها",
}

export default function FormLayoutsPage() {
  return <FormLayouts />
}
