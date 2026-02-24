import { ContactUs } from "./_components/contact-us"
import { Faqs } from "./_components/faqs"
import { Hero } from "./_components/hero"
import { WhatPeopleSay } from "./_components/what-people-say"

export default function LandingPage() {
  return (
    <div className="py-4 space-y-16 bg-muted/40">
      <Hero />
      <WhatPeopleSay />
      <Faqs />
      <ContactUs />
    </div>
  )
}
