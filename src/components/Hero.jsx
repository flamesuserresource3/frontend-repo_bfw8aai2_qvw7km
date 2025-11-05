import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-100/40 via-transparent to-purple-100/40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              Secure profile • Fintech ready
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Your personal employee dashboard
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              View salary, track schedules, enroll bills, apply for monthly loans, and
              keep your biodata up to date — all in one clean, modern workspace.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#quick" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2.5 font-medium shadow hover:bg-blue-700">
                Get started
              </a>
              <a href="#biodata" className="inline-flex items-center justify-center rounded-lg bg-white text-slate-800 px-4 py-2.5 font-medium shadow border border-slate-200 hover:bg-slate-50">
                Update biodata
              </a>
            </div>
          </div>
          <div className="relative h-[320px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <Spline
              scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
