import { ColorsModule } from '@/components/dashboard/ColorsModule'
import { TypographyModule } from '@/components/dashboard/TypographyModule'
import { IconographyModule } from '@/components/dashboard/IconographyModule'
import { ButtonsInputsModule } from '@/components/dashboard/ButtonsInputsModule'
import { ChatWidget } from '@/components/dashboard/ChatWidget'
import { ActivityTimeline } from '@/components/dashboard/ActivityTimeline'
import { SummaryChart } from '@/components/dashboard/SummaryChart'

const Index = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column (4 columns) */}
      <div className="lg:col-span-4 space-y-6">
        <ColorsModule />
        <TypographyModule />
        <IconographyModule />
      </div>

      {/* Right Column (8 columns) */}
      <div className="lg:col-span-8 space-y-6">
        <ButtonsInputsModule />

        {/* Interactive Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChatWidget />
          <ActivityTimeline />
        </div>

        {/* Summary Section */}
        <div className="w-full">
          <SummaryChart />
        </div>
      </div>
    </div>
  )
}

export default Index
