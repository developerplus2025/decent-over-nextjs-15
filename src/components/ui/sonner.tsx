"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(input)",
          "-toast-close-button-transform": "translate(0%, 0%);",
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { Toaster }
