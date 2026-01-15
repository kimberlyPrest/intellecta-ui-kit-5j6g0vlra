import { GlassCard } from '@/components/ui/glass-card'

export function ColorsModule() {
  return (
    <GlassCard className="flex flex-col gap-6" delay={100}>
      <div className="flex items-center gap-2">
        <span className="p-2 bg-muted/50 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-palette"
          >
            <circle cx="13.5" cy="6.5" r=".5" />
            <circle cx="17.5" cy="10.5" r=".5" />
            <circle cx="8.5" cy="7.5" r=".5" />
            <circle cx="6.5" cy="12.5" r=".5" />
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
          </svg>
        </span>
        <h3 className="text-lg font-semibold">Colors</h3>
      </div>

      <div className="space-y-4">
        <div className="group relative w-full aspect-[2/1] rounded-2xl bg-[#2D2D2D] shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-semibold text-lg">Primary Slate</p>
            <p className="text-white/60 text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
              #2D2D2D
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <ColorSwatch name="Lime" color="bg-[#D9F99D]" hex="#D9F99D" />
          <ColorSwatch name="Lavender" color="bg-[#DDD6FE]" hex="#DDD6FE" />
          <ColorSwatch name="Neutral" color="bg-[#E5E7EB]" hex="#E5E7EB" />
        </div>
      </div>
    </GlassCard>
  )
}

function ColorSwatch({
  name,
  color,
  hex,
}: {
  name: string
  color: string
  hex: string
}) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className={`w-full aspect-square rounded-2xl ${color} shadow-sm transition-transform hover:scale-105 relative cursor-help`}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs font-mono font-bold text-slate-700 bg-white/80 px-1 py-0.5 rounded">
            {hex}
          </span>
        </div>
      </div>
      <span className="text-xs font-medium text-muted-foreground">{name}</span>
    </div>
  )
}
