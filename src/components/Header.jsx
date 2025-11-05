import { CheckCircle2, Bell, Settings } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-500 grid place-items-center shadow-md">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-500 leading-tight">Employee Personal App</p>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">Employee Hub</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-600">
            <Settings className="h-5 w-5" />
          </button>
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 text-white grid place-items-center font-semibold">
            JD
          </div>
        </div>
      </div>
    </header>
  )
}
