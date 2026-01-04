"use client"

import { useState } from "react"
import { useMedia } from "react-use"

import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

export function AddMovement() {
  const [open, setOpen] = useState(false)
  const isDesktop = useMedia("(min-width: 768px)")

  return (
    <>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">افزودن حرکت جدید </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>افرودن حرکت جدید</DialogTitle>
            </DialogHeader>
            <ProfileForm />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline">افزودن حرکت جدید </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>افزودن حرکت جدید </DrawerTitle>
              <DrawerDescription>
                تغییرات خود را در فرم زیر اعمال کنید.
              </DrawerDescription>
            </DrawerHeader>
            <ProfileForm className="px-4" />
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

function ProfileForm({ className }: ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="exerciseName">نام حرکت</Label>
        <Input type="text" id="exerciseName" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="sets">تعداد ست</Label>
        <Input type="number" id="sets" min={1} max={3} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="reps">تعداد تکرار</Label>
        <Input type="number" id="reps" min={5} max={15} />
      </div>
      <Button type="submit">ذخیره تغییرات</Button>
    </form>
  )
}
