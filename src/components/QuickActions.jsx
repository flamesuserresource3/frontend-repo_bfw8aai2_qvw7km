import { CreditCard, Calendar, FileText, Wallet, User } from 'lucide-react'

const actions = [
  {
    key: 'salary',
    title: 'Salary',
    desc: 'Pay history, slips, and next payday',
    icon: CreditCard,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    key: 'schedule',
    title: 'Work Schedule',
    desc: 'Shifts, hours, and time-off',
    icon: Calendar,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    key: 'bills',
    title: 'Monthly Bill Enrolment',
    desc: 'Set up and manage recurring bills',
    icon: FileText,
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    key: 'loan',
    title: 'Monthly Loan Application',
    desc: 'Apply with simple monthly terms',
    icon: Wallet,
    color: 'from-amber-500 to-orange-500',
  },
  {
    key: 'biodata',
    title: 'Biodata',
    desc: 'Personal details and contacts',
    icon: User,
    color: 'from-indigo-500 to-blue-500',
  },
]

function ActionCard({ item }) {
  const Icon = item.icon
  return (
    <a
      href={`#${item.key}`}
      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-tr ${item.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
      <div className="relative flex items-start gap-4">
        <div className={`h-11 w-11 shrink-0 rounded-lg bg-gradient-to-tr ${item.color} text-white grid place-items-center shadow-md`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-slate-900 font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
        </div>
      </div>
      <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-700 group-hover:text-blue-800">
        Open
        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 7.414V16a1 1 0 11-2 0V7.414L6.707 9.707A1 1 0 015.293 8.293l5-5z" clipRule="evenodd" />
        </svg>
      </div>
    </a>
  )
}

export default function QuickActions() {
  return (
    <section id="quick" className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Quick actions</h3>
            <p className="text-slate-600 mt-1">Everything you need, a click away.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {actions.map((a) => (
            <ActionCard key={a.key} item={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
