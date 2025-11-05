import Header from './components/Header'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import QuickActions from './components/QuickActions'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-50 text-slate-900">
      <Header />
      <Hero />
      <StatsStrip />
      <QuickActions />
      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-slate-500">
          Built for a modern, vibrant workforce experience.
        </div>
      </footer>
    </div>
  )
}

export default App
