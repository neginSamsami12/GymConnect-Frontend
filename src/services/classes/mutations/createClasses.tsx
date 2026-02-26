import { BASE_URL, CONTROLLERS } from "@/configs/api-config"
import baseAxios from "@/configs/axios/BaseAxios"

import { ApiResponse } from "../../apiTypes"

export type LocalTimeInput =
  | string
  | { hour: number; minute: number; second?: number; nano?: number }

export interface CreateClassRequest {
  trainerId: string
  title: string
  description?: string
  capacity: number
  days: string
  scheduleTime: string // "18:00"
  startDate: string
  endDate: string
  price: number
  image?: FileList
}

export type CreateClassResponse = ApiResponse<unknown>

function normalizeScheduleTime(t: LocalTimeInput): string {
  if (typeof t === "string") return t
  const hh = String(t.hour).padStart(2, "0")
  const mm = String(t.minute).padStart(2, "0")
  const ss = String(t.second ?? 0).padStart(2, "0")
  return `${hh}:${mm}:${ss}`
}

function pickFirstFile(image?: File | FileList | null): File | undefined {
  if (!image) return undefined
  if (image instanceof File) return image
  // FileList
  return image.length > 0 ? (image.item(0) ?? undefined) : undefined
}

export async function createClass(req: CreateClassRequest) {
  const imageFile = req.image?.[0]

  const { image, ...rest } = req

  const jsonData = {
    ...rest,
    scheduleTime:
      rest.scheduleTime.length === 5
        ? `${rest.scheduleTime}:00`
        : rest.scheduleTime,
  }

  const form = new FormData()

  form.append(
    "data",
    new Blob([JSON.stringify(jsonData)], { type: "application/json" })
  )

  if (imageFile) {
    form.append("image", imageFile)
  }

  const response = await baseAxios.post(
    `${BASE_URL}/${CONTROLLERS.CLASSES}`,
    form
  )
  return response.data
}
