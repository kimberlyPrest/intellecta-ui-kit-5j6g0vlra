import { GlassCard } from '@/components/ui/glass-card'
import { Palette } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ColorsModule() {
  const colors = [
    {
      name: 'Primary Slate',
      hex: '#2D2D2D',
      className: 'bg-intellecta-slate',
    },
    {
      name: 'Lime',
      hex: '#D9F99D',
      className: 'bg-intellecta-lime',
    },
    {
      name: 'Lavender',
      hex: '#DDD6FE',
      className: 'bg-intellecta-lavender',
    },
    {
      name: 'Gray',
      hex: '#E5E7EB',
      className: 'bg-intellecta-neutral',
    },
  ]

  return (
    <GlassCard
      className="bg-surface-light dark:bg-surface-dark border border-white/50 dark:border-gray-700 p-8 rounded-[2.5rem] shadow-soft flex flex-col gap-8"
      delay={100}
    >
      <div className="flex items-center gap-3">
        <Palette className="w-5 h-5 text-foreground/70" />
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Colors
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {colors.map((color) => (
          <div key={color.name} className="group flex items-center gap-6">
            <div
              className={cn(
                'w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-[1.75rem] shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ring-1 ring-black/5 dark:ring-white/10',
                color.className,
              )}
            />
            <div className="flex flex-col gap-1.5">
              <span className="text-xl font-bold text-foreground tracking-tight">
                {color.name}
              </span>
              <span className="font-mono text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {color.hex}
              </span>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
