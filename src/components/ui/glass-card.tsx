import * as React from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, delay = 0, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'glass-panel rounded-3xl p-6 transition-all duration-300 hover:shadow-lg',
          'animate-fade-in-stagger opacity-0',
          className,
        )}
        style={{ animationDelay: `${delay}ms`, ...style }}
        {...props}
      />
    )
  },
)
GlassCard.displayName = 'GlassCard'
