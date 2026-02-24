import { WhatPeopleSayCarousel } from "./what-people-say-carousel"

export function WhatPeopleSay() {
  return (
    <section id="testimonials" className="container flex flex-col gap-8">
      <div className="text-center mx-auto space-y-1.5">
        <h2 className="text-4xl font-semibold">نظرات کاربران باشگاه</h2>
      </div>
      <WhatPeopleSayCarousel />
    </section>
  )
}
