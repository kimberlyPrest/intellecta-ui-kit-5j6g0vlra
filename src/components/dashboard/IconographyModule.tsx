import { GlassCard } from '@/components/ui/glass-card'
import { Home, LayoutGrid, Zap, Bookmark, Settings, Shapes } from 'lucide-react'

export function IconographyModule() {
  const icons = [
    { Icon: Home, label: 'Home' },
    { Icon: LayoutGrid, label: 'Grid' },
    { Icon: Zap, label: 'Bolt' },
    { Icon: Bookmark, label: 'Bookmark' },
    { Icon: Settings, label: 'Settings' },
  ]

  return (
    <GlassCard className="flex flex-col gap-6" delay={300}>
      <div className="flex items-center gap-2">
        <span className="p-2 bg-muted/50 rounded-full">
          <Shapes className="w-4 h-4" />
        </span>
        <h3 className="text-lg font-semibold">Iconography</h3>
      </div>

      <div className="flex justify-between items-center gap-2 px-2">
        {icons.map(({ Icon, label }) => (
          <div
            key={label}
            className="group relative flex items-center justify-center"
          >
            <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-subtle flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/5 group-hover:scale-110 cursor-pointer">
              <Icon
                className="w-5 h-5 text-foreground/80 transition-colors group-hover:text-primary"
                strokeWidth={2}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
