import { GlassCard } from '@/components/ui/glass-card'
import { Calendar, Music } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function ActivityTimeline() {
  return (
    <GlassCard className="h-[400px] flex flex-col overflow-hidden" delay={600}>
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div>
          <h3 className="text-lg font-semibold">My activity</h3>
          <p className="text-xs text-muted-foreground">
            What is waiting for you today
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full border-0 bg-muted/50"
        >
          <Calendar className="w-4 h-4 text-muted-foreground" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto min-h-0 pt-4 -mr-2 pr-2">
        <div className="relative min-h-full">
          {/* Time Axis */}
          <div className="flex justify-between text-[10px] text-muted-foreground font-medium uppercase tracking-wider mb-2 px-2">
            <span>07:00</span>
            <span>09:00</span>
            <span>11:00</span>
            <span>01:00</span>
          </div>

          {/* Grid Lines */}
          <div className="absolute inset-x-2 top-6 bottom-0 flex justify-between pointer-events-none">
            <div className="w-px bg-border/40 h-full border-l border-dashed border-muted-foreground/30"></div>
            <div className="w-px bg-border/40 h-full border-l border-dashed border-muted-foreground/30"></div>
            <div className="w-px bg-border/40 h-full border-l border-dashed border-muted-foreground/30"></div>
            <div className="w-px bg-border/40 h-full border-l border-dashed border-muted-foreground/30"></div>
          </div>

          {/* Current Time Indicator */}
          <div className="absolute top-0 bottom-0 left-[62%] w-px bg-primary z-20 flex flex-col items-center pointer-events-none">
            <div className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full -mt-3 shadow-md whitespace-nowrap">
              12:00
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary absolute bottom-0"></div>
          </div>

          {/* Events Container */}
          <div className="relative pt-8 space-y-4 pb-4">
            {/* Event 1 */}
            <div className="relative left-[15%] w-[45%] bg-[#D9F99D]/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-white/20 group cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">
                    Project onboarding
                  </h4>
                  <p className="text-[10px] text-slate-600">Google Meeting</p>
                </div>
                <div className="flex -space-x-2">
                  <Avatar className="w-6 h-6 border-2 border-white">
                    <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=1" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="w-6 h-6 border-2 border-white">
                    <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=2" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="w-6 h-6 rounded-full bg-white/80 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-600">
                    +2
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative left-[40%] w-[40%] bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm p-3 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-border mt-6 group cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold">Design research</h4>
                  <p className="text-[10px] text-muted-foreground">
                    Figma file
                  </p>
                </div>
                <div className="flex -space-x-2">
                  <Avatar className="w-6 h-6 border-2 border-background">
                    <AvatarImage src="https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3" />
                    <AvatarFallback>SR</AvatarFallback>
                  </Avatar>
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground border-2 border-background flex items-center justify-center text-[8px] font-bold">
                    +5
                  </div>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative left-[75%] w-[25%] bg-[#DDD6FE]/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-white/20 group cursor-pointer mt-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-bold text-slate-800">
                    Coffee break
                  </h4>
                </div>
                <p className="text-[10px] text-slate-600 flex items-center gap-1">
                  <Music className="w-3 h-3 opacity-50" /> Co&Co Café
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
