"use client"

import { useRouter } from "next/navigation"
import { CreateClassRequest } from "@/services/classes/mutations/createClasses"
import { useCreateClass } from "@/services/classes/useClassesApis"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { FormLayoutsSchema } from "../_schemas/form-layouts-schema"

import { ButtonLoading } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { InputFile } from "@/components/ui/input-file"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type FormType = CreateClassRequest

export function ClassForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(FormLayoutsSchema),
    defaultValues: {
      image: undefined,
    },
  })

  const { isSubmitting, isDirty } = form.formState
  const isDisabled = isSubmitting || !isDirty
  const mutation = useCreateClass()
  const router = useRouter()

  async function onSubmit(data: FormType) {
    mutation.mutate(data, {
      onSuccess: () => router.push("/dashboards/classes"),
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>مشخصات کلاس</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-3">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    فایل
                  </FormLabel>

                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <CardContent className="p-0">
                      <InputFile
                        placeholder="فایلی انتخاب نشده"
                        accept="image/*"
                        value={field.value}
                        onValueChange={field.onChange}
                        buttonLabel="انتخاب کنید"
                      />
                    </CardContent>
                  </FormControl>

                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    نام کلاس
                  </FormLabel>
                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <Input type="text" placeholder="پیلاتس" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="days"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    روزهای برگزاری
                  </FormLabel>
                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <Input type="text" placeholder="شنبه/ دوشنبه" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="scheduleTime"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    ساعت برگزاری
                  </FormLabel>
                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <Input type="time" placeholder="10:00" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="trainerId"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    مربی‌ها
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="col-start-3 col-span-full md:col-start-2">
                        <SelectValue placeholder="مربی مورد نظر را انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5ac3d10e-4868-4c43-957e-8fc3d308d5c1">
                          علی حمدی
                        </SelectItem>
                        <SelectItem value="3fa85f64-5717-4562-b3fc-2c963f66afa6">
                          نگین صمصامی
                        </SelectItem>
                        <SelectItem value="3fa85f64-5717-4562-b3fc-2c963f66afa7">
                          محمد اسدی
                        </SelectItem>
                        <SelectItem value="3fa85f64-5717-4562-b3fc-2c963f66afa8">
                          فاطمه احمدی
                        </SelectItem>
                        <SelectItem value="3fa85f64-5717-4562-b3fc-2c963f66afa9">
                          رسول باقری
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="capacity"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    ظرفیت کلاس
                  </FormLabel>
                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <Input
                      type="number"
                      placeholder="ظرفیت کلاس"
                      min={1}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    هزینه
                  </FormLabel>
                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <Input type="text" placeholder="هزینه" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    تاریخ شروع
                  </FormLabel>
                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <Input type="date" placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    تاریخ پابان
                  </FormLabel>
                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <Input type="date" placeholder="تاریخ پابان" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="grid grid-cols-8 items-center gap-x-3">
                  <FormLabel className="col-span-2 md:col-span-1">
                    توضیحات
                  </FormLabel>
                  <FormControl className="col-start-3 col-span-full md:col-start-2">
                    <Input type="text" placeholder="توضیحات کلاس" {...field} />
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />

            <ButtonLoading
              isLoading={isSubmitting}
              disabled={isDisabled}
              className="w-fit mt-2"
            >
              ذخیره تغییرات
            </ButtonLoading>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
