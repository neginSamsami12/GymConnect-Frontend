"use client"

import { useAttendanceWeeklyInfo } from "@/services/attendance/useAttendanceApis"

import { formatDateJalali } from "@/lib/utils"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AttendanceReport() {
  const { data } = useAttendanceWeeklyInfo()
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>آمار حضور هفتگی ورزشکاران</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">نام</TableHead>
              <TableHead>نام خانوادگی</TableHead>
              <TableHead> کلاس</TableHead>
              <TableHead className="text-right">تاریخ حضور</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((info) => (
              <TableRow
                key={info.id}
                className={"bg-green-100 text-green-700 hover:bg-green-200"}
              >
                <TableCell className="font-medium">{info.firstName}</TableCell>
                <TableCell>{info.lastName}</TableCell>
                <TableCell>{info.className}</TableCell>
                <TableCell className="text-right">
                  {formatDateJalali(info.date)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
