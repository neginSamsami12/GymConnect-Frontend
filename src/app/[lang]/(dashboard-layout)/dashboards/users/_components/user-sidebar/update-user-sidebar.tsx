"use client"

import { useEffect, useMemo } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Grid2x2Plus } from "lucide-react"

import type { AddUserFormType } from "../../types"

import { UserSchema } from "../../_schemas/user-schema"

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
import { Gender, GenderRecords } from "@/types"
import { findItemByValue } from "@/lib/utils"

const defaultValues = {
  firstName: "",
  lastName: "",
  phone: "",
  nationalId: "",
  email: "",
  address: "",
  birthDate: new Date(),
  image: [],
}

export function UpdateUserSidebar() {
  const {
    selectedUser,
    updateUserSidebarIsOpen,
    setUpdateUserSidebarIsOpen,
    handleUpdateUser,
    setSelectedUser,
  } = useUserContext()

  const form = useForm<AddUserFormType>({
    resolver: zodResolver(UserSchema),
    defaultValues,
  })

  const { isSubmitting, isDirty } = form.formState
  const isDisabled = isSubmitting || !isDirty // Disable button if form is unchanged or submitting

  // Reset the form with the current selected user's values whenever `selectedUser` changes
  useEffect(() => {
    if (selectedUser) {
      form.reset({
        firstName: selectedUser.firstName,
        lastName: selectedUser.lastName,
        nationalId: selectedUser.nationalId,
        phone: selectedUser.phone,
        gender: selectedUser.gender,
        email: selectedUser.email,
        birthDate: new Date(selectedUser.birthDate),
        address: selectedUser.address,
        image: [],
      })
    }
  }, [selectedUser, form])

  function onSubmit(data: AddUserFormType) {
    if (selectedUser) {
      const payload = {
        ...data,
        image: Array.isArray(data.image) && data.image.length > 0 && data.image[0] instanceof File ? data.image[0] : undefined,
        birthDate: data.birthDate ? data.birthDate.toISOString() : "",
        gender: GenderRecords.find(g => g.label === data.gender)?.value as Gender,
      }
      handleUpdateUser(payload, selectedUser.id)
    }

    handleSidebarClose()
  }

  const handleSidebarClose = () => {
    form.reset(defaultValues) // Reset the form to the initial values
    setSelectedUser(undefined) // Unselect the current user
    setUpdateUserSidebarIsOpen(false) // Close the sidebar
  }

  const genderOptions = useMemo(
    () =>
      GenderRecords.map((gender) => (
        <SelectItem key={gender.value} value={gender.label}>
          {gender.label}
        </SelectItem>
      )),
    []
  )

  return (
    <Sheet
      open={updateUserSidebarIsOpen}
      onOpenChange={() => handleSidebarClose()}
    >
      <SheetContent className="p-0" side="end">
        <ScrollArea className="h-full p-4">
          <SheetHeader>
            <SheetTitle>افزوردن کاربر</SheetTitle>
            <SheetDescription>
              ویرایش اطلاعات {selectedUser?.firstName + " " + selectedUser?.lastName}
            </SheetDescription>
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
                name="gender"
                // defaultValue={findItemByValue(GenderRecords, field)}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>جنسیت</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={findItemByValue(GenderRecords, field.value)?.label}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="انتخاب کنید" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>{genderOptions}</SelectContent>
                    </Select>
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
                name="image"
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
