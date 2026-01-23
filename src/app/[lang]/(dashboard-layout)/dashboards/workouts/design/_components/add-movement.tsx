"use client"

import { useState } from "react"
import { useMedia } from "react-use"

import { cn } from "@/lib/utils"

import { Button, ButtonLoading } from "@/components/ui/button"
import { z } from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Exercise } from "@/models/workout"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { ExerciseFormsSchema } from "../_schemas/exercise-form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

type Props = {
  submitFunction: (exercise: Exercise) => void
  className?: string
}

export function AddMovement({ submitFunction }: Props) {
  const [open, setOpen] = useState(false)
  const isDesktop = useMedia("(min-width: 768px)")
  
  return (
    <>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button type="button" variant="outline">افزودن حرکت جدید</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>افرودن حرکت جدید</DialogTitle>
            </DialogHeader>
            <PopUpForm submitFunction={submitFunction} />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button type="button" variant="outline">افزودن حرکت جدید</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>افزودن حرکت جدید</DrawerTitle>
              <DrawerDescription>
                تغییرات خود را در فرم زیر اعمال کنید.
              </DrawerDescription>
            </DrawerHeader>
            <PopUpForm className="px-4" submitFunction={submitFunction} />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">لغو</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}

type FormType = z.infer<typeof ExerciseFormsSchema>

function PopUpForm({ className, submitFunction }: Props) {

  const defaultValues: FormType = {
    exerciseName: "",
    description: "",
    reps: 0,
    sets: 0
  }

  const form = useForm<FormType>({
    resolver: zodResolver(ExerciseFormsSchema),
    defaultValues
  })

  const handleSubmit = (data: Exercise) => {
    submitFunction(data)
    form.reset(defaultValues)
  }

  const { isSubmitting, isDirty } = form.formState
  const isDisabled = isSubmitting || !isDirty

  return (
    <>
      <Form {...form}>
        <form
          className={cn("grid items-start gap-4", className)}
        >
          <FormField
            control={form.control}
            name="exerciseName"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>نام حرکت</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="نام حرکت" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sets"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>تعداد ست</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="تعداد ست" {...field} min={1} max={3} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reps"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>تعداد تکرار</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="تعداد تکرار" {...field} min={5} max={15} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>توضیحات</FormLabel>
                <FormControl>
                  <Textarea placeholder="توضیحات" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <ButtonLoading
            isLoading={isSubmitting}
            disabled={isDisabled}
            className="mt-2"
            type="button"
            onClick={form.handleSubmit(handleSubmit)}
          >
            افزودن حرکت
          </ButtonLoading>
        </form>
      </Form>
    </>
  )
}
