import { z } from "zod"

export const FormLayoutsSchema = z.object({
  className: z
    .string({
      required_error: "نام کلاس الزامی است.",
    })
    .trim()
    .min(2, { message: "نام کلاس باید حداقل 2 کاراکتر باشد." })
    .max(6, { message: "نام کلاس باید حداکثر 6 کاراکتر باشد." }),

  days: z
    .string({
      required_error: "روزهای برگزاری الزامی است.",
    })
    .trim()
    .min(1, { message: "روزهای برگزاری باید حداقل 1 روز باشد." })
    .max(3, { message: "روزهای برگزاری باید حداکثر 3 روز باشد." }),

  hours: z.string({
    required_error: "ساعت برگزاری الزامی است.",
  }),

  coaches: z
    .string({
      required_error: "نام مربی الزامی است.",
    })
    .trim()
    .toLowerCase()
    .min(2, { message: "نام مربی باید حداقل 2 کاراکتر باشد." }),

  capacity: z.coerce
    .number({
      required_error: "ظرفیت کلاس الزامی است.",
      invalid_type_error: "ظرفیت باید عدد باشد.",
    })
    .int({ message: "ظرفیت باید عدد صحیح باشد." })
    .min(10, { message: "ظرفیت کلاس باید حداقل 10 نفر باشد." })
    .max(25, { message: "ظرفیت کلاس باید حداکثر 25 نفر باشد." }),

  expense: z
    .string({
      required_error: "هزینه الزامی است.",
    })
    .trim()
    .min(2, { message: "هزینه باید حداقل 2 کاراکتر باشد." })
    .max(50, { message: "هزینه باید حداکثر 50 کاراکتر باشد." }),

  startdate: z.string({
    required_error: "تاریخ شروع الزامی است.",
  }),

  dateEnd: z.string({
    required_error: "تاریخ پایان الزامی است.",
  }),

  description: z
    .string({
      required_error: "توضیحات الزامی است.",
    })
    .trim()
    .min(5, { message: "توضیحات باید حداقل 5 کاراکتر باشد." }),
})
