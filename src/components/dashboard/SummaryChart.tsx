import { GlassCard } from '@/components/ui/glass-card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
} from 'recharts'
import { SlidersHorizontal, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const data = [
  { time: '10am', value: 120 },
  { time: '11am', value: 150 },
  { time: '12pm', value: 180 },
  { time: '1pm', value: 170 },
  { time: '2pm', value: 203 },
  { time: '3pm', value: 190 },
  { time: '4pm', value: 160 },
  { time: '5pm', value: 140 },
  { time: '6pm', value: 170 },
]

const chartConfig = {
  value: {
    label: 'Performance',
    color: 'hsl(var(--primary))',
  },
}

export function SummaryChart() {
  return (
    <GlassCard
      className="w-full h-full min-h-[300px] flex flex-col"
      delay={700}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold">Summary</h3>
          <p className="text-xs text-muted-foreground">
            Track your performance
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-muted/50"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-muted/50"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 w-full h-full min-h-[200px]">
        <ChartContainer config={chartConfig} className="w-full h-full">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-value)"
                  stopOpacity={0.1}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-value)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              opacity={0.4}
            />
            <XAxis dataKey="time" hide />
            <YAxis hide domain={['dataMin - 50', 'dataMax + 20']} />
            <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
            <Area
              dataKey="value"
              type="natural"
              fill="url(#fillValue)"
              stroke="var(--color-value)"
              strokeWidth={2}
              className="animate-draw-chart"
            />
            {/* Custom Marker for Peak */}
            <ReferenceLine
              x="2pm"
              stroke="transparent"
              label={({ viewBox }) => {
                const x = viewBox.x + viewBox.width / 2 // Approximate center of the point
                const y = viewBox.y
                return (
                  <g transform={`translate(${x}, ${y - 10})`}>
                    <rect
                      x="-20"
                      y="-25"
                      width="40"
                      height="22"
                      rx="6"
                      fill="#2D2D2D"
                    />
                    <text
                      x="0"
                      y="-10"
                      textAnchor="middle"
                      fill="white"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      203
                    </text>
                    <circle
                      cx="0"
                      cy="5"
                      r="4"
                      fill="#D9F99D"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </g>
                )
              }}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </GlassCard>
  )
}
