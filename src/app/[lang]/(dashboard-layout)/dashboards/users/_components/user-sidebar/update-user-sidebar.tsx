"use client"

import { useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Grid2x2Plus } from "lucide-react"

import type { AddUserFormType } from "../../types"

import { labelsData } from "../../_data/labels"

import { AddUserSchema } from "../../_schemas/add-user-schema"

import { useUserContext } from "../../_hooks/use-user-context"
import { ButtonLoading } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/date-picker"
import { FileDropzone } from "@/components/ui/file-dropzone"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { InputTagsWithSuggestions } from "@/components/ui/input-tags"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"

const defaultValues = {
  firstName: "",
  lastName: "",
  phone: "",
  nationalId: "",
  email: "",
  address: "",
  dueDate: new Date(),
  attachments: [],
}

export function UpdateUserSidebar() {
  const {
    userState,
    updateUserSidebarIsOpen,
    setUpdateUserSidebarIsOpen,
    handleUpdateUser,
    handleSelectUser,
  } = useUserContext()

  const form = useForm<AddUserFormType>({
    resolver: zodResolver(AddUserSchema),
    defaultValues,
  })

  const { teamMembers, selectedUser } = userState
  const { isSubmitting, isDirty } = form.formState
  const isDisabled = isSubmitting || !isDirty // Disable button if form is unchanged or submitting

  // Reset the form with the current selected task's values whenever `selectedTask` changes
  useEffect(() => {
    if (selectedUser) {
      form.reset({
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
        nationalId: selectedUser.nationalId,
        phone: selectedUser.phone,
        email: selectedUser.email,
        birthDate: selectedUser.birthDate,
        address: selectedUser.address,
        attachments: selectedUser.attachments,
      })
    }
  }, [selectedUser, form])

  function onSubmit(data: AddUserFormType) {
    const payload = {
      ...data,
      birthDate: data.birthDate ? data.birthDate.toISOString() : "",
    }
    handleUpdateUser(payload)

    handleSidebarClose()
  }

  const handleSidebarClose = () => {
    form.reset(defaultValues) // Reset the form to the initial values
    handleSelectUser(undefined) // Unselect the current user
    setUpdateUserSidebarIsOpen(false) // Close the sidebar
  }

  return (
    <Sheet
      open={updateUserSidebarIsOpen}
      onOpenChange={() => handleSidebarClose()}
    >
      <SheetContent className="p-0" side="end">
        <ScrollArea className="h-full p-4">
          <SheetHeader>
            <SheetTitle>افزوردن کاربر</SheetTitle>
            <SheetDescription>ویرایش اطلاعات</SheetDescription>
          </SheetHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-y-3 mt-3"
            >
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام</FormLabel>
                    <FormControl>
                      <Input placeholder="نام کاربر" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام خانوادگی</FormLabel>
                    <FormControl>
                      <Input placeholder="نام خانوادگی کاربر" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nationalId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>کدملی</FormLabel>
                    <FormControl>
                      <Input placeholder="کدملی کاربر" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>شماره تلقن</FormLabel>
                    <FormControl>
                      <Input placeholder="شماره تلفن" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input placeholder="ایمیل" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>تاریخ تولد</FormLabel>
                    <FormControl>
                      <DatePicker
                        formatStr="PPP"
                        onValueChange={field.onChange}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>آدرس</FormLabel>
                    <FormControl>
                      <Input placeholder="آدرس" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="attachments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تصویر کاربر</FormLabel>
                    <FormControl>
                      <FileDropzone
                        multiple
                        onFilesChange={field.onChange}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <ButtonLoading
                isLoading={isSubmitting}
                disabled={isDisabled}
                className="w-full"
                icon={Grid2x2Plus}
              >
                ذخیره کردن
              </ButtonLoading>
            </form>
          </Form>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
