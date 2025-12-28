import type { ConversionFunnelType } from "../types"

export const conversionFunnelData: ConversionFunnelType = {
  period: "ماه گذشته",
  funnelSteps: [
    {
      name: "Visited Page",
      value: 15000,
    },
    {
      name: "Added to Cart",
      value: 5000,
    },
    {
      name: "Initiated Checkout",
      value: 1000,
    },
    {
      name: "Completed Purchase",
      value: 300,
    },
  ],
}
