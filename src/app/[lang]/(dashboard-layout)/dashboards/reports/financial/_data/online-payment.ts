import type { OnlinePaymentnType } from "../types"

export const onlinePaymentnData: OnlinePaymentnType = {
  period: "هفته گذشته",
  summary: {
    name: "میانگین امتیاز",
    value: 3.8,
  },
  feedbacks: [
    {
      name: "امیر رضایی",
      email: "amir.rezaei@example.com",
      avatar: "/images/avatars/male-01.svg",
      rating: 4.5,
      feedbackMessage:
        "خدمات باشگاه عالی بود! همه چیز منظم و حرفه‌ای انجام شد و از تجربه‌ام کاملاً راضی هستم.",
      createdAt: new Date("2024-11-20T14:35:00Z"),
    },
    {
      name: "مهدی کریمی",
      email: "mehdi.karimi@example.com",
      avatar: "/images/avatars/male-02.svg",
      rating: 3.0,
      feedbackMessage:
        "در مجموع تجربه بدی نبود، اما جای پیشرفت وجود دارد. بعضی از بخش‌ها کمی شلوغ بود و هماهنگی می‌توانست بهتر باشد. امیدوارم در آینده روند خدمات روان‌تر شود.",
      createdAt: new Date("2024-11-19T10:15:00Z"),
    },
    {
      name: "نگار موسوی",
      email: "negar.mousavi@example.com",
      avatar: "/images/avatars/female-03.svg",
      rating: 5.0,
      feedbackMessage:
        "واقعاً فوق‌العاده بود! هم مربی‌ها حرفه‌ای بودن هم فضای باشگاه بسیار تمیز و انگیزه‌بخش بود.",
      createdAt: new Date("2024-11-18T09:45:00Z"),
    },
    {
      name: "حسین احمدی",
      email: "hossein.ahmadi@example.com",
      avatar: "/images/avatars/male-02.svg",
      rating: 2.5,
      feedbackMessage:
        "متأسفانه در زمان‌بندی کلاس‌ها با مشکل مواجه شدم و اطلاع‌رسانی دقیق نبود. با اینکه برخی بخش‌ها خوب بود، اما این موارد باعث شد تجربه‌ام رضایت‌بخش نباشد.",
      createdAt: new Date("2024-11-17T17:00:00Z"),
    },
    {
      name: "الهام جعفری",
      email: "elham.jafari@example.com",
      avatar: "/images/avatars/female-02.svg",
      rating: 4.0,
      feedbackMessage:
        "تجربه خوبی داشتم. مربیان برخورد محترمانه‌ای داشتند و برنامه تمرینی کاربردی بود. قطعاً این باشگاه را به دوستانم پیشنهاد می‌کنم.",
      createdAt: new Date("2024-11-16T12:30:00Z"),
    },
  ],
}
