import { z } from "zod"

export const ContactUsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "نام باید حداقل ۲ کاراکتر باشد" })
    .max(50, { message: "نام باید حداکثر ۵۰ کاراکتر باشد" }),
  email: z
    .string()
    .toLowerCase()
    .trim()
    .email({ message: "ایمیل وارد شده معتبر نیست" })
    .min(2, { message: "ایمیل باید حداقل ۲ کاراکتر باشد" })
    .max(50, { message: "ایمیل باید حداکثر ۵۰ کاراکتر باشد" }),
  message: z
    .string()
    .trim()
    .min(2, { message: "پیام باید حداقل ۲ کاراکتر باشد" })
    .max(5000, { message: "پیام باید حداکثر ۵۰۰۰ کاراکتر باشد" }),
})
