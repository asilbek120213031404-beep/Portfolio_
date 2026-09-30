const stats = [
  { value: '2+', label: 'Yillik tajriba' },
  { value: '10+', label: 'Loyihalar' },
  { value: '16', label: 'Yosh' },
  { value: '∞', label: 'Qiziquvchanlik' },
]

export default function Stats() {
  return (
    <section aria-label="Quick stats" className="relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-2xl px-5 py-5 text-center border border-white/[0.06] hover:border-white/[0.10] transition-all duration-300 group"
            >
              <p className="font-heading text-3xl font-bold text-white mb-1 group-hover:text-[#63b3ed] transition-colors duration-300">
                {value}
              </p>
              <p className="text-slate-500 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
