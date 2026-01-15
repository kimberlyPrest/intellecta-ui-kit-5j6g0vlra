import { Moon, Sun, Hexagon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="container max-w-[1280px] mx-auto py-6 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-xl backdrop-blur-sm">
            <Hexagon className="w-8 h-8 text-primary fill-primary/20" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Intellecta
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              Design System & UI Kit
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-12 h-12 glass-panel border-0 hover:scale-110 transition-transform duration-300"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
