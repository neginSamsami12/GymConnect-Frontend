import { z } from "zod"

export const ExerciseFormsSchema = z.object({
  exerciseName: z
    .string({
      required_error: "نام حرکت الزامی است.",
    })
    .trim()
    .min(2, { message: "نام حرکت باید حداقل 2 کاراکتر باشد." })
    .max(50, { message: "نام حرکت باید حداکثر 50 کاراکتر باشد." }),
  sets: z.coerce
    .number({
      required_error: "تعداد ست برای حرکت الزامی است.",
      invalid_type_error: "تعداد ست برای حرکت باید عدد باشد.",
    })
    .int({ message: "تعداد ست برای حرکت باید عدد صحیح باشد." })
    .min(1, { message: "تعداد ست برای حرکت باید حداقل 1 باشد." })
    .max(3, { message: "تعداد ست برای حرکت باید حداکثر 3 باشد." }),
  reps: z.coerce
    .number({
      required_error: "تعداد تکرار برای حرکت الزامی است.",
      invalid_type_error: "تعداد تکرار برای حرکت باید عدد باشد.",
    })
    .int({ message: "تعداد تکرار برای حرکت باید عدد صحیح باشد." })
    .min(5, { message: "تعداد تکرار برای حرکت باید حداقل 5 باشد." })
    .max(15, { message: "تعداد تکرار برای حرکت باید حداکثر 15 باشد." }),
  description: z.string({
    required_error: "توضیحات الزامی است.",
  }),
})
