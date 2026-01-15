import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/dashboard/Header'

export default function Layout() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="relative min-h-screen w-full overflow-x-hidden font-sans">
        {/* Background Layer */}
        <div className="fixed inset-0 -z-10 transition-colors duration-500 ease-in-out">
          {/* Light Mode Gradients */}
          <div className="absolute inset-0 bg-[#F8FAFC] dark:opacity-0 transition-opacity duration-500">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/30 blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-indigo-200/30 blur-[120px]" />
            <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-purple-200/20 blur-[80px]" />
          </div>

          {/* Dark Mode Gradients */}
          <div className="absolute inset-0 bg-slate-950 opacity-0 dark:opacity-100 transition-opacity duration-500">
            <div className="absolute top-[-20%] right-0 w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
            <div className="absolute bottom-0 left-[-10%] w-[60%] h-[60%] rounded-full bg-slate-800/20 blur-[100px]" />
          </div>
        </div>

        <Header />

        <main className="container max-w-[1280px] mx-auto pb-10 px-4 md:px-6">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  )
}
