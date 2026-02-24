import type { ReactNode } from "react"
import type { z } from "zod"
import type { ContactUsSchema } from "./_schemas/contact-us-schema"

export type ContactUsType = z.infer<typeof ContactUsSchema>

export interface WhatPeopleSayType {
  name: string
  role: string
  company: string
  quote: string
  avatar: string
  rating: number
}

export interface FaqType {
  question: string
  answer: ReactNode
}
