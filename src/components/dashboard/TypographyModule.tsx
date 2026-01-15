import { GlassCard } from '@/components/ui/glass-card'
import { Type } from 'lucide-react'

export function TypographyModule() {
  return (
    <GlassCard className="flex flex-col gap-6" delay={200}>
      <div className="flex items-center gap-2">
        <span className="p-2 bg-muted/50 rounded-full">
          <Type className="w-4 h-4" />
        </span>
        <h3 className="text-lg font-semibold">Typography</h3>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold leading-tight">Heading 1</h1>
          <p className="text-xs text-muted-foreground mt-1">
            Plus Jakarta Sans / Bold / 36px
          </p>
        </div>

        <div className="border-t border-border/50 pt-4">
          <h2 className="text-2xl font-semibold leading-tight">Heading 2</h2>
          <p className="text-xs text-muted-foreground mt-1">
            Plus Jakarta Sans / Semibold / 24px
          </p>
        </div>

        <div className="border-t border-border/50 pt-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            This is body text. The Intellecta design system uses clear, legible
            sans-serif fonts with generous line height for readability.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Body / Regular / 16px
          </p>
        </div>
      </div>
    </GlassCard>
  )
}
