import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/ui/card"

export function Hero() {
  return (
    <section className="container space-y-10">
      <HeroImage />
    </section>
  )
}

function HeroImage() {
  return (
    <Card id="demo" className="bg-accent p-2 md:p-6">
      <Card
        className="pointer-events-none bg-muted p-6 overflow-hidden"
        asChild
      >
        <AspectRatio ratio={25.5 / 12}>
          <Image
            src="/images/misc/hero.png"
            alt=""
            fill
            sizes="(max-width: 768px) 640px, 1080px"
            priority
            className="block object-cover object-top dark:hidden"
          />
          <Image
            src="/images/misc/hero.png"
            alt=""
            fill
            sizes="(max-width: 768px) 640px, 1080px"
            priority
            className="hidden object-cover object-top dark:block"
          />
        </AspectRatio>
      </Card>
    </Card>
  )
}
