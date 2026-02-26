import type { EventType } from "../types"

export const eventsData: EventType[] = [
  {
    id: "1",
    title: "کلاس بدنسازی (عمومی)",
    allDay: true,
    start: new Date(new Date().setDate(new Date().getDate())),
    end: new Date(new Date().setDate(new Date().getDate())),
    extendedProps: {
      category: "کلاس‌ها",
      description:
        "کلاس بدنسازی عمومی همراه با مربی. لطفاً ۱۰ دقیقه زودتر حضور داشته باشید.",
    },
  },
  {
    id: "2",
    title: "تمرین خصوصی با مربی",
    allDay: true,
    start: new Date(new Date().setDate(new Date().getDate() + 2)),
    end: new Date(new Date().setDate(new Date().getDate() + 2)),
    extendedProps: {
      category: "تمرین خصوصی",
      description: "جلسه ۱ ساعته تمرین خصوصی. رزرو و پرداخت از قبل انجام شود.",
    },
  },
  {
    id: "3",
    title: "کلاس یوگا",
    allDay: true,
    start: new Date(new Date().setDate(new Date().getDate() - 3)),
    end: new Date(new Date().setDate(new Date().getDate() - 3)),
    extendedProps: {
      category: "کلاس‌ها",
      description:
        "کلاس یوگا (سطح متوسط). همراه داشتن زیرانداز پیشنهاد می‌شود.",
    },
  },
  {
    id: "4",
    title: "سرویس دوره‌ای تجهیزات",
    allDay: true,
    start: new Date(new Date().setDate(new Date().getDate() + 7)),
    end: new Date(new Date().setDate(new Date().getDate() + 7)),
    extendedProps: {
      category: "نگهداری",
      description:
        "بازبینی و سرویس دستگاه‌ها. ممکن است برخی بخش‌ها موقتاً غیرفعال شوند.",
    },
  },
  {
    id: "5",
    title: "مسابقه داخلی باشگاه",
    allDay: true,
    start: new Date(new Date().setDate(new Date().getDate() + 10)),
    end: new Date(new Date().setDate(new Date().getDate() + 10)),
    extendedProps: {
      category: "رویدادها",
      description: "مسابقه دوستانه داخلی. ثبت‌نام از طریق پذیرش یا آنلاین.",
    },
  },
  {
    id: "6",
    title: "ثبت‌نام و تمدید عضویت",
    allDay: true,
    start: new Date(new Date().setDate(new Date().getDate() + 15)),
    end: new Date(new Date().setDate(new Date().getDate() + 15)),
    extendedProps: {
      category: "عضویت",
      description: "آخرین مهلت تمدید/ثبت‌نام برای ماه آینده با تخفیف.",
    },
  },
]
