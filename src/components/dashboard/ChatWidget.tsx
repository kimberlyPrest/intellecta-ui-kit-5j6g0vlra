import { GlassCard } from '@/components/ui/glass-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageSquare, HelpCircle, Settings, Smile, Mic } from 'lucide-react'

export function ChatWidget() {
  return (
    <GlassCard
      className="h-[400px] flex flex-col p-0 overflow-hidden"
      delay={500}
    >
      <div className="p-4 border-b border-white/20 flex justify-between items-center">
        <div className="flex gap-4">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full bg-primary/5 text-primary"
          >
            <MessageSquare className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full hover:bg-muted text-muted-foreground"
          >
            <HelpCircle className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 rounded-full hover:bg-muted text-muted-foreground"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
        <div className="self-start max-w-[85%]">
          <div className="glass-panel p-4 rounded-2xl rounded-tl-sm bg-white/80 dark:bg-slate-800/80 shadow-sm border border-border/50">
            <p className="text-sm leading-relaxed">
              Hi there! I'm a virtual assistant. <br /> How can I help you
              today?
            </p>
          </div>
          <span className="text-[10px] text-muted-foreground ml-2 mt-1 block">
            9:32
          </span>
        </div>
      </div>

      <div className="p-4 bg-white/30 dark:bg-black/10 backdrop-blur-md">
        <div className="relative">
          <Input
            placeholder="Write a message"
            className="rounded-full bg-background/50 border-0 h-10 pr-20 focus-visible:ring-1 focus-visible:ring-primary/20"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-muted-foreground hover:text-primary"
            >
              <Smile className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full text-muted-foreground hover:text-primary"
            >
              <Mic className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
