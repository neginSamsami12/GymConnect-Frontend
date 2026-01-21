import type { Metadata } from "next"

import { DesignForm } from "./_components/design-form"

// Define metadata for the page
// More info: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export const metadata: Metadata = {
  title: "طراحی برنامه تمرینی",
}

export default function FormLayoutsPage() {
  return <DesignForm />
}
