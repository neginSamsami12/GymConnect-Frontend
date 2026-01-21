"use client"

import { useEffect, useMemo, useState } from "react"
import { AttendanceRegistrationRequest } from "@/services/attendance/mutations/attendanceRegistration"
import { useAttendanceRegistration } from "@/services/attendance/useAttendanceApis"
import { ClassInfo } from "@/services/classes/queries/getClassesList"
import { useGetClassesInfoMutate } from "@/services/classes/useClassesApis"
import { useGetUserInfo } from "@/services/users/useUsersApis"
import { useMedia } from "react-use"

import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
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
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type UserSelectItem = {
  id: string
  fullName: string
}

type ClassSelectItem = {
  id: string
  title: string
}

export function Registration() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMedia("(min-width: 768px)")

  const { data, isLoading } = useGetUserInfo()

  const users: UserSelectItem[] = useMemo(() => {
    const list = data?.data ?? []
    return list.map((u) => ({
      id: u.id,
      fullName: `${u.firstName} ${u.lastName}`.trim(),
    }))
  }, [data])

  return (
    <>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">ثبت حضور کاربر</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>ثبت حضور کاربر</DialogTitle>
            </DialogHeader>

            <ProfileForm users={users} isLoading={!!isLoading} />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">ثبت حضور کاربر</Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>ثبت حضور کاربر</DrawerTitle>
            </DrawerHeader>

            <ProfileForm
              className="px-4"
              users={users}
              isLoading={!!isLoading}
            />

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

function ProfileForm({
  className,
  users,
  isLoading,
}: ComponentProps<"form"> & {
  users: UserSelectItem[]
  isLoading: boolean
}) {
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>()
  const [selectedClassId, setSelectedClassId] = useState<string | undefined>()

  const [classes, setClasses] = useState<ClassSelectItem[]>([])
  const [isClassesLoading, setIsClassesLoading] = useState(false)

  const { mutateAsync } = useGetClassesInfoMutate()

  const isUserDisabled = isLoading || users.length === 0
  const isClassDisabled =
    !selectedUserId || isClassesLoading || classes.length === 0

  useEffect(() => {
    const run = async () => {
      if (!selectedUserId) {
        setClasses([])
        setSelectedClassId(undefined)
        return
      }

      setIsClassesLoading(true)
      setSelectedClassId(undefined)

      try {
        const res = await mutateAsync({ id: selectedUserId })

        const list: ClassInfo[] = res?.data ?? []

        setClasses(
          list.map((c) => ({
            id: c.id,
            title: c.title,
          }))
        )
      } catch (e) {
        setClasses([])
      } finally {
        setIsClassesLoading(false)
      }
    }

    run()
  }, [selectedUserId, mutateAsync])

  const mutation = useAttendanceRegistration()

  function handleSubmit(e: any) {
    e.preventDefault() // جلوگیری از رفرش شدن صفحه

    const data = {
      userId: selectedUserId,
      classId: selectedClassId,
    } as AttendanceRegistrationRequest
    mutation.mutate(data)
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e)
      }}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="user">کاربر</Label>

        <Select
          value={selectedUserId}
          onValueChange={setSelectedUserId}
          disabled={isUserDisabled}
        >
          <SelectTrigger className="col-start-3 col-span-full md:col-start-2">
            <SelectValue
              placeholder={
                isLoading
                  ? "در حال دریافت کاربران..."
                  : users.length === 0
                    ? "کاربری یافت نشد"
                    : "کاربر مورد نظر را انتخاب کنید"
              }
            />
          </SelectTrigger>

          <SelectContent>
            {users.map((u) => (
              <SelectItem key={u.id} value={u.id}>
                {u.fullName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="class">کلاس</Label>

        <Select
          value={selectedClassId}
          onValueChange={setSelectedClassId}
          disabled={isClassDisabled}
        >
          <SelectTrigger className="col-start-3 col-span-full md:col-start-2">
            <SelectValue
              placeholder={
                !selectedUserId
                  ? "ابتدا کاربر را انتخاب کنید"
                  : isClassesLoading
                    ? "در حال دریافت کلاس‌ها..."
                    : classes.length === 0
                      ? "کلاسی یافت نشد"
                      : "کلاس کاربر مورد نظر را انتخاب کنید"
              }
            />
          </SelectTrigger>

          <SelectContent>
            {classes.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" disabled={!selectedUserId || !selectedClassId}>
        ذخیره تغییرات
      </Button>
    </form>
  )
}
