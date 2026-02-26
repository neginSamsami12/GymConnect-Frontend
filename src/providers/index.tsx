import { QueryClientProvider } from "@tanstack/react-query"

import type { DirectionType, LocaleType } from "@/types"
import type { ReactNode } from "react"

import QueryProvider from "@/contexts/query-context"
import { SettingsProvider } from "@/contexts/settings-context"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DirectionProvider } from "./direction-provider"
import { ModeProvider } from "./mode-provider"
import { ThemeProvider } from "./theme-provider"

export function Providers({
  locale,
  direction,
  children,
}: Readonly<{
  locale: LocaleType
  direction: DirectionType
  children: ReactNode
}>) {
  return (
    <QueryProvider>
      <SettingsProvider locale={locale}>
        <ModeProvider>
          <ThemeProvider>
            <DirectionProvider direction={direction}>
              <SidebarProvider>{children}</SidebarProvider>
            </DirectionProvider>
          </ThemeProvider>
        </ModeProvider>
      </SettingsProvider>
    </QueryProvider>
  )
}
