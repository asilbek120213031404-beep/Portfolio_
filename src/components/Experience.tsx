import { timeline } from '../data/timeline'

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 py-24"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="section-label mb-3">JOURNEY</p>
          <h2
            id="experience-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-white mb-14"
          >
            My journey
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-white/[0.06]" aria-hidden="true" />

            <ol className="space-y-10">
              {timeline.map((item, i) => (
                <li key={i} className="relative flex gap-6">
                  {/* Year */}
                  <div className="w-16 shrink-0 text-right">
                    <span className="code-font text-[11px] text-slate-600 leading-none">
                      {item.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative shrink-0" style={{ marginTop: '2px' }}>
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-[#63b3ed]/50 bg-[#050816]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
