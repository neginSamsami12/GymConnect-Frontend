import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"

export function ClassCard() {
  return (
    <Card className="rounded-2xl">
      <div className="flex flex-col gap-y-6 p-6">
        {/* Class Name */}
        <CardTitle className="text-xl font-bold text-primary">
          کلاس کراس‌فیت پیشرفته
        </CardTitle>

        {/* Image + Info */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch">
          {/* Image */}
          <div className="md:col-span-1">
            <AspectRatio ratio={1} className="h-full rounded-xl bg-muted p-2">
              <Image
                src="/images/misc/product-02.jpg"
                alt="class image"
                fill
                className="rounded-lg object-cover shadow-sm"
              />
            </AspectRatio>
          </div>

          {/* Info Box */}
          <div className="md:col-span-4 h-full rounded-xl bg-muted/40 p-4 flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 w-full text-center">
              {/* Coach */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-blue-600">مربی</span>
                <span className="text-sm font-semibold">علی رضایی</span>
              </div>

              {/* Days */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-green-600">
                  روزهای برگزاری
                </span>
                <span className="text-sm">شنبه، دوشنبه، چهارشنبه</span>
              </div>

              {/* Time */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-orange-600">
                  ساعت برگزاری
                </span>
                <span className="text-sm">۱۸:۰۰ تا ۱۹:۳۰</span>
              </div>

              {/* Duration */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-medium text-purple-600">
                  مدت دوره
                </span>
                <span className="text-sm">۱ فروردین ۱۴۰۳ تا ۳۰ خرداد ۱۴۰۳</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <CardContent className="p-0">
          <p className="text-sm leading-6 text-muted-foreground text-center md:text-right">
            تمرینات حرفه‌ای کراس‌فیت برای افزایش قدرت، استقامت و آمادگی جسمانی.
          </p>
        </CardContent>

        {/* Footer */}
        <CardFooter className="p-0 gap-x-3 justify-center md:justify-start">
          <Button>پرداخت و ثبت نام</Button>
          <Button variant="secondary">جزئیات بیشتر</Button>
        </CardFooter>
      </div>
    </Card>
  )
}
