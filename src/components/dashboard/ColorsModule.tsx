import { GlassCard } from '@/components/ui/glass-card'
import { Palette } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ColorsModule() {
  return (
    <GlassCard
      className="bg-surface-light dark:bg-surface-dark border border-white/50 dark:border-gray-700 p-8 rounded-3xl shadow-soft flex flex-col gap-6"
      delay={100}
    >
      <div className="flex items-center gap-2">
        <Palette className="w-6 h-6" />
        <h2 className="text-xl font-semibold">Colors</h2>
      </div>

      <div className="space-y-6">
        <div className="group flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-primary shadow-sm transition-all duration-300 group-hover:ring-4 group-hover:ring-primary/20" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Primary Slate</span>
            <span className="font-mono text-sm text-muted-foreground uppercase">
              #2D2D2D
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <ColorSwatch name="Lime" colorClass="bg-accent-lime" />
          <ColorSwatch name="Lavender" colorClass="bg-accent-purple" />
          <ColorSwatch
            name="Neutral"
            colorClass="bg-gray-200 dark:bg-gray-600"
          />
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
    <div className="flex flex-col gap-2">
      <div
        className={cn(
          'w-full aspect-square rounded-2xl shadow-sm transition-transform hover:scale-105',
          colorClass,
        )}
      />
      <span className="text-sm font-medium text-muted-foreground text-center">
        {name}
      </span>
    </div>
  )
}
