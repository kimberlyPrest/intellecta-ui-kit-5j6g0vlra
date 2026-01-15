import { GlassCard } from '@/components/ui/glass-card'
import { Palette } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ColorsModule() {
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
        {/* Primary Color Block */}
        <div className="group flex items-center gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-[1.75rem] bg-intellecta-slate shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-md ring-1 ring-black/5 dark:ring-white/10" />
          <div className="flex flex-col gap-1.5">
            <span className="text-xl font-bold text-foreground tracking-tight">
              Primary Slate
            </span>
            <span className="font-mono text-sm font-medium text-muted-foreground uppercase tracking-wide">
              #2D2D2D
            </span>
          </div>
        </div>

        {/* Accent Colors Grid */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          <ColorSwatch name="Lime" colorClass="bg-intellecta-lime" />
          <ColorSwatch name="Lavender" colorClass="bg-intellecta-lavender" />
          <ColorSwatch name="Neutral" colorClass="bg-intellecta-neutral" />
        </div>
      </div>
    </GlassCard>
  )
}

function ColorSwatch({
  name,
  colorClass,
}: {
  name: string
  colorClass: string
}) {
  return (
    <div className="flex flex-col gap-3 items-center group/swatch">
      <div
        className={cn(
          'w-full aspect-square rounded-[1.5rem] shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md ring-1 ring-black/5 dark:ring-white/10',
          colorClass,
        )}
      />
      <span className="font-mono text-xs font-medium text-muted-foreground text-center tracking-wide group-hover/swatch:text-foreground transition-colors">
        {name}
      </span>
    </div>
  )
}
