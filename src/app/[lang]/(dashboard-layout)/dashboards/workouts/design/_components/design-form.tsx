"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import type { z } from "zod"

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
import { Exercise } from "@/models/workout"
import { useState } from "react"
import { useCreateWorkout } from "@/services/workout/useWorkoutApis"

type FormType = z.infer<typeof DesignFormsSchema>

export function DesignForm() {
  const form = useForm<FormType>({
    resolver: zodResolver(DesignFormsSchema),
    defaultValues: {
      athlete: "",
      title: "",
      description: "",
    },
  })

  const { isSubmitting, isDirty } = form.formState
  const isDisabled = isSubmitting || !isDirty
  const [exercises, setExercises] = useState<Exercise[]>([])
  const { mutate } = useCreateWorkout()

  const handleAddExercise = (exercise: Exercise) => {
    setExercises(prevExercises => [...prevExercises,
    {
      index: prevExercises.length,
      ...exercise,
    }
    ]);
  }

  async function onSubmit(_data: FormType) {
    console.log("data: ", _data)
    mutate(
      {
        title: _data.title,
        athleteId: _data.athlete,
        exercises,
        description: _data.description,

      }
    )
  }

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
              name="athlete"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ورزشکار</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="col-start-3 col-span-full md:col-start-2">
                        <SelectValue placeholder="ورزشکار مورد نظر را انتخاب کنید" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5ac3d10e-4868-4c43-957e-8fc3d308d5c1">علی حمدی</SelectItem>
                        <SelectItem value="3fa85f64-5717-4562-b3fc-2c963f66afa6">نگین صمصامی</SelectItem>
                        <SelectItem value="3fa85f64-5717-4562-b3fc-2c963f66afa7">محمد اسدی</SelectItem>
                        <SelectItem value="3fa85f64-5717-4562-b3fc-2c963f66afa8">فاطمه احمدی</SelectItem>
                        <SelectItem value="3fa85f64-5717-4562-b3fc-2c963f66afa9">رسول باقری</SelectItem>
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
            <div className="mt-6 col-span-full">
              <MovementList data={exercises} />
            </div>
            <div className="mt-2 col-span-full flex justify-center align-middle">
              <AddMovement submitFunction={handleAddExercise} />
            </div>
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
