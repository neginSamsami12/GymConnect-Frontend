import { WorkoutInfoListResponse } from "@/services/workout/queries/getWorkoutsList"

export const movementData: WorkoutInfoListResponse = {
  success: true,
  timestamp: "",
  data:
    [
      {
        id: "۱",
        athleteName: "ورزشکار ۱",
        trainerName: "مربی ۱",
        title: "عنوان ۱",
        description: "توضیحات ۱",
        exercises: [
          {
            index: 1,
            exerciseName: "اسکات بلغاری",
            sets: 3,
            reps: 12,
            description: "توضیحات اسکات بلغاری"
          },
        ],
      },
      {
        id: "۲",
        athleteName: "ورزشکار ۲",
        trainerName: "مربی ۲",
        title: "عنوان ۲",
        description: "توضیحات ۲",
        exercises: [
          {
            index: 1,
            exerciseName: "اسکات بلغاری",
            sets: 3,
            reps: 12,
            description: "توضیحات اسکات بلغاری"
          },
          {
            index: 2,
            exerciseName: "اسکات بلغاری",
            sets: 3,
            reps: 12,
            description: "توضیحات اسکات بلغاری"
          },
        ],
      },
      {
        id: "۳",
        athleteName: "ورزشکار ۳",
        trainerName: "مربی ۳",
        title: "عنوان ۳",
        description: "توضیحات ۳",
        exercises: [
          {
            index: 1,
            exerciseName: "اسکات بلغاری",
            sets: 3,
            reps: 12,
            description: "توضیحات اسکات بلغاری"
          },
          {
            index: 2,
            exerciseName: "اسکات بلغاری",
            sets: 3,
            reps: 12,
            description: "توضیحات اسکات بلغاری"
          },
          {
            index: 3,
            exerciseName: "اسکات بلغاری",
            sets: 3,
            reps: 12,
            description: "توضیحات اسکات بلغاری"
          }
        ],
      },
    ]
}