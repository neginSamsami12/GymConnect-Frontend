import type { SalesType } from "../types"

export const salesTrendData: SalesType = {
  period: "سال گذشته",
  summary: {
    totalLead: 2200,
    totalProposal: 1550,
    totalNegotiation: 900,
    totalClosed: 700,
  },
  monthly: [
    { month: "فروردین", lead: 250, proposal: 200, negotiation: 80, closed: 50 },
    {
      month: "اردیبهشت",
      lead: 230,
      proposal: 190,
      negotiation: 70,
      closed: 55,
    },
    { month: "خرداد", lead: 200, proposal: 180, negotiation: 75, closed: 60 },
    { month: "تیر", lead: 180, proposal: 160, negotiation: 85, closed: 65 },
    { month: "مرداد", lead: 190, proposal: 140, negotiation: 90, closed: 50 },
    { month: "شهریور", lead: 170, proposal: 130, negotiation: 95, closed: 45 },
    { month: "مهر", lead: 160, proposal: 120, negotiation: 100, closed: 70 },
    { month: "آبان", lead: 150, proposal: 130, negotiation: 110, closed: 80 },
    {
      month: "آذر",
      lead: 200,
      proposal: 150,
      negotiation: 120,
      closed: 90,
    },
    {
      month: "دی",
      lead: 220,
      proposal: 170,
      negotiation: 100,
      closed: 85,
    },
    {
      month: "بهمن",
      lead: 240,
      proposal: 190,
      negotiation: 70,
      closed: 70,
    },
    {
      month: "اسفند",
      lead: 210,
      proposal: 220,
      negotiation: 100,
      closed: 80,
    },
  ],
}
