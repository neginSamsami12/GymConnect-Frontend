"use client"

import DateObject from "react-date-object"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Calendar as JalaliCalendar } from "react-multi-date-picker"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type DatePickerProps = {
  value?: Date
  onValueChange?: (date?: Date) => void
  placeholder?: string
  buttonClassName?: string
}

export function DatePicker({
  value,
  onValueChange,
  placeholder = "انتخاب تاریخ",
  buttonClassName,
}: DatePickerProps) {
  const formattedValue = value
    ? new DateObject({
        date: value,
        calendar: persian,
        locale: persian_fa,
      }).format("YYYY/MM/DD")
    : ""

  return (
    <Popover modal>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-full px-3 text-start font-normal", buttonClassName)}
        >
          {value ? (
            <span>{formattedValue}</span>
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
          <CalendarIcon className="shrink-0 h-4 w-4 ms-auto text-muted-foreground" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-2" align="start">
        <div dir="rtl">
          <JalaliCalendar
            calendar={persian}
            locale={persian_fa}
            value={value}
            onChange={(d: any) => onValueChange?.(d?.toDate?.())}
            weekDays={["ش", "ی", "د", "س", "چ", "پ", "ج"]}
          />
        </div>
      </PopoverContent>
    </Popover>
  )
}
