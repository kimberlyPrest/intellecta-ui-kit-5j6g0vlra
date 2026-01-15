import { GlassCard } from '@/components/ui/glass-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Plus,
  ArrowRight,
  Search,
  Paperclip,
  Mic,
  MousePointerClick,
} from 'lucide-react'

export function ButtonsInputsModule() {
  return (
    <GlassCard className="w-full flex flex-col gap-8" delay={400}>
      <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between">
        {/* Buttons Section */}
        <div className="space-y-4 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <MousePointerClick className="w-4 h-4 text-muted-foreground" />
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Buttons
            </h4>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Button className="rounded-full pl-4 pr-6 h-12 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <Plus className="w-5 h-5 mr-2" /> Add task
            </Button>

            <Button
              variant="outline"
              className="rounded-full px-8 h-12 text-base border-primary/20 bg-transparent hover:bg-secondary hover:scale-105 transition-all"
            >
              Secondary
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-primary/20 bg-transparent hover:bg-secondary hover:scale-105 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Inputs Section */}
        <div className="space-y-4 flex-[1.5]">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Input Fields
            </h4>
          </div>

          <div className="space-y-4">
            <div className="relative group">
              <Input
                placeholder="Write a message"
                className="h-12 rounded-full pl-6 pr-24 glass-input border-0 shadow-sm focus-visible:ring-primary/20 transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-primary/10 rounded-full"
                >
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-primary/10 rounded-full"
                >
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="h-12 rounded-full pl-10 glass-input border-0 shadow-sm focus-visible:ring-primary/20 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
