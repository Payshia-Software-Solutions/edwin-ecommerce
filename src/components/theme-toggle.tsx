
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      checked={theme === 'dark'}
      onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      className="data-[state=checked]:bg-black data-[state=unchecked]:bg-gray-200"
      thumbClassName="h-6 w-6 data-[state=checked]:translate-x-6 bg-white flex items-center justify-center text-black"
      aria-label="Toggle theme"
    >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Switch>
  )
}
