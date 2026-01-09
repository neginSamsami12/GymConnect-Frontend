import { z } from "zod"

import { MAX_SIZE } from "../constants"
import { GenderRecords } from "@/types"

const FileSchema = z.object({
  id: z.string(),
  url: z.string(),
  name: z.string(),
  size: z.number().max(MAX_SIZE, {
    message: "File size must be less than or equal to 50 MB.",
  }),
  type: z.string(),
})

export const UserSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: "نام کاربر باید حداقل دو کاراکتری باشد." })
    .max(50, { message: "نام کاربر باید حداکثر ۵۰ کاراکتری باشد." }),
  lastName: z
    .string()
    .trim()
    .min(2, { message: "نام کاربر باید حداقل دو کاراکتری باشد." })
    .max(50, { message: "نام کاربر باید حداکثر ۵۰ کاراکتری باشد." }),
  gender: z.custom<string>(
    (value) => GenderRecords.some((gender) => gender.label === value),
    { message: "یک گزینه را انتخاب کنید" }
  ),
  nationalId: z
    .string()
    .trim()
    .min(10, { message: "کد ملی را به درستی وارد کنید." })
    .max(15, { message: "کد ملی را به درستی وارد کنید." }),
  phone: z
    .string()
    .trim()
    .length(11, { message: "شماره تلفن را به درستی وارد کنید." }),
  email: z
    .string()
    .trim()
    .email({ message: "ایمیل را به درستی وارد کنید." }),
  birthDate: z.date({
    required_error: "تاریخ تولد را وارد کنید.",
    invalid_type_error: "تاریخ تولد نامعتبر است.",
  })
    .max(new Date(), {
      message: "تاریخ تولد نامعتبر است.",
    }),
  address: z
    .string({
      required_error: "آدرس را وارد کنید.",
    })
    .trim(),
  image: z.array(FileSchema).max(1, {
    message: "تنها یک فایل می‌توانید انتخاب کنید.",
  }),
})
