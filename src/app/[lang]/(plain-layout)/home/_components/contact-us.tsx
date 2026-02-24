import { ContactUsForm } from "./contact-us-form"
import { ContactUsInfo } from "./contact-us-info"

export function ContactUs() {
  return (
    <section
      id="contact-us"
      className="container grid gap-4 md:grid-cols-3 md:gap-8"
    >
      <div className="space-y-8 md:space-y-4">
        <div className="text-center space-y-1.5 md:text-start">
          <h2 className="text-4xl font-semibold">تماس با ما</h2>
          <p className="max-w-prose mx-auto text-sm text-muted-foreground">
            سوالی دارید یا نیاز به کمک دارید؟ فرم زیر را پر کنید و ما در اسرع
            وقت به شما پاسخ خواهیم داد.
          </p>
        </div>
        <ContactUsInfo />
      </div>
      <ContactUsForm />
    </section>
  )
}
