import { Calendar, Clock, CreditCard, ShieldCheck } from 'lucide-react'

export default function StatsStrip() {
  const stats = [
    {
      icon: CreditCard,
      label: 'Next payday',
      value: '28 Nov',
      color: 'text-blue-600',
    },
    { icon: Clock, label: 'Hours this week', value: '32.5 h', color: 'text-emerald-600' },
    { icon: Calendar, label: 'Upcoming shifts', value: '3', color: 'text-indigo-600' },
    { icon: ShieldCheck, label: 'Compliance', value: 'All clear', color: 'text-violet-600' },
  ]

  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-slate-50 grid place-items-center">
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <div>
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <p className="text-sm font-semibold text-slate-900">{s.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
