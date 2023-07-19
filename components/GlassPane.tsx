import clsx from "clsx"
import { ReactNode } from "react"

interface GlassPaneProps {
    children: ReactNode
    className?: string
}

export function GlassPane({children, className}: GlassPaneProps) {
  return (
    <div className={clsx('glass rounded-2xl border-solid border-2 border-gray-200', className)}>{children}</div>
  )
}
