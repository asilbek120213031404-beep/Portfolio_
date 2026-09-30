import { MapPinIcon, GraduationCapIcon, Code2Icon, ServerIcon, BrainIcon } from './icons'

const highlights = [
  {
    icon: Code2Icon,
    title: 'Frontend',
    description: 'React, TypeScript, JavaScript, Tailwind CSS',
    color: 'text-[#63b3ed]',
    bg: 'bg-[#63b3ed]/[0.08]',
  },
  {
    icon: ServerIcon,
    title: 'Backend',
    description: 'Supabase, PostgreSQL, Python',
    color: 'text-[#a78bfa]',
    bg: 'bg-[#a78bfa]/[0.08]',
  },
  {
    icon: BrainIcon,
    title: 'Sun\'iy intellekt',
    description: 'OpenAI integratsiyalari',
    color: 'text-[#63b3ed]',
    bg: 'bg-[#63b3ed]/[0.08]',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <p className="section-label mb-4">MEN HAQIMDA</p>
            <h2
              id="about-heading"
              className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            >
              Haqiqiy muammolarni hal qiladigan narsalar yaratishga ishtiyoqim bor.
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                Men 2+ yillik tajribaga ega full-stack dasturchiman. Murakkab
                muammolarni sodda va qulay yechimga aylantirish menga zavq
                beradi.
              </p>
              <p>
                Zamonaviy web texnologiyalari bilan — React, TypeScript,
                Supabase va OpenAI — real foydalanuvchilar uchun ishlaydigan
                mahsulotlar yarataman. Frontend va backend arxitekturasini
                birgalikda o'ylab loyiha tuzaman.
              </p>
              <p>
                Bo'sh vaqtimda yangi texnologiyalarni o'rganish, ochiq kodli
                loyihalarga hissa qo'shish yoki yangi ko'nikmalarni oshirish
                bilan shug'ullanaman.
              </p>
            </div>

            {/* Location & Education */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPinIcon size={15} className="text-[#63b3ed] shrink-0" />
                <span className="text-sm">Urgut, Samarkand, Uzbekistan</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <GraduationCapIcon size={15} className="text-[#63b3ed] shrink-0" />
                <span className="text-sm">Ilmla</span>
              </div>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="space-y-3 lg:pt-12">
            {highlights.map(({ icon: Icon, title, description, color, bg }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-4 rounded-xl glass border border-white/[0.06] hover:border-white/[0.10] transition-all duration-200 group"
              >
                <div className={`${bg} ${color} p-2.5 rounded-lg shrink-0`}>
                  <Icon size={16} />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">{title}</p>
                  <p className="text-slate-500 text-sm">{description}</p>
                </div>
              </div>
            ))}

            {/* Realtime card */}
            <div className="p-4 rounded-xl glass border border-white/[0.06] hover:border-white/[0.10] transition-all duration-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <p className="code-font text-[11px] text-emerald-400/80 uppercase tracking-wider">
                  Real vaqt
                </p>
              </div>
              <p className="text-slate-400 text-sm">
                Supabase Realtime orqali multiplayer va live-sync
                imkoniyatlarini loyihalarga qo'shaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
