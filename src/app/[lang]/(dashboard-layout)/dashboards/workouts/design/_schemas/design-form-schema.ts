import { z } from "zod"

export const DesignFormsSchema = z.object({
  athlete: z
    .string({
      required_error: "نام ورزشکار الزامی است.",
    })
    .trim()
    .min(2, { message: "نام ورزشکار باید حداقل 2 کاراکتر باشد." })
    .max(50, { message: "نام ورزشکار باید حداکثر 50 کاراکتر باشد." }),
  title: z
    .string({
      required_error: "عنوان برنامه الزامی است.",
    })
    .trim()
    .min(2, { message: "عنوان برنامه باید حداقل 2 کاراکتر باشد." })
    .max(50, { message: "عنوان برنامه باید حداکثر 50 کاراکتر باشد." }),
  description: z.string({
    required_error: "توضیحات الزامی است.",
  }),
})
