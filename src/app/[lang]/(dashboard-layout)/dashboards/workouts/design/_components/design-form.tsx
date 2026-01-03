"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import type { z } from "zod"

import { topProductsData } from "../../_data/top-products"

import { DesignFormsSchema } from "../_schemas/design-form-schema"

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
import { InputPhone } from "@/components/ui/input-phone"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MovementList } from "../../_components/movement-list"
import { AddMovement } from "./add-movement"

type FormType = z.infer<typeof DesignFormsSchema>

export function DesignForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(DesignFormsSchema),
  })

  const { isSubmitting, isDirty } = form.formState
  const isDisabled = isSubmitting || !isDirty // Disable button if form is unchanged or submitting

  async function onSubmit(_data: FormType) {}

  return (
    <Card>
      <CardHeader>
        <CardTitle>طراحی برنامه تمرینی برای ورزشکار</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-3"
          >
            <FormField
              control={form.control}
              name="coaches"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ورزشکار</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="col-start-3 col-span-full md:col-start-2">
                        <SelectValue placeholder="مربی مورد نظر را انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="california">نگین صمصامی</SelectItem>
                        <SelectItem value="texas"> محمد اسدی</SelectItem>
                        <SelectItem value="florida">فاطمه احمدی</SelectItem>
                        <SelectItem value="new-york">رسول باقری</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="col-start-3 col-span-full md:col-start-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>عنوان برنامه</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="عنوان برنامه" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>توضیحات برنامه</FormLabel>
                  <FormControl>
                    <Textarea placeholder="توضیحات برنامه" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <div className="mt-6 col-span-full">
          <MovementList data={topProductsData.movements} />
        </div>
        <div className="mt-6 flex justify-center align-middle">
          <AddMovement />
        </div>
        <ButtonLoading
          isLoading={isSubmitting}
          disabled={isDisabled}
          className="w-fit mt-2"
        >
          ذخیره تغییرات
        </ButtonLoading>
      </CardContent>
    </Card>
  )
}
