import { skills, skillCategories } from '../data/skills'

// Tech icons as inline SVG paths — using well-known brand colors
function TechIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    react: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" fill="none" transform="rotate(-60 12 12)" />
      </svg>
    ),
    typescript: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <path d="M3.5 12.5H9v1.5H7v5H5.5v-5H3.5v-1.5z" fill="white" />
        <path d="M10 15.7c0 1.3 1 2.3 2.5 2.3 1.4 0 2.5-1 2.5-2.3 0-1.2-.7-1.8-2-2.3l-.5-.2c-.7-.3-.9-.5-.9-.9 0-.4.3-.7.8-.7s.9.3.9.9h1.5c0-1.2-.9-2.1-2.3-2.1s-2.3.9-2.3 2.1c0 1.1.7 1.7 1.9 2.2l.5.2c.8.3 1 .6 1 1 0 .5-.4.8-1 .8s-1.1-.4-1.1-1.1H10z" fill="white" />
      </svg>
    ),
    javascript: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M6.5 18.5l1.2-1.1c.3.7.7 1.1 1.4 1.1.6 0 1-.3 1-1.3V12h1.6v5.3c0 2-1.1 2.9-2.7 2.9-1.5 0-2.3-.8-2.8-1.7z" fill="#323330" />
        <path d="M13.5 18.3l1.2-1c.4.6.9 1 1.7 1 .7 0 1.1-.3 1.1-.8 0-.6-.4-.8-1.2-1.1l-.4-.2c-1.2-.5-2-1.2-2-2.6 0-1.3 1-2.3 2.6-2.3 1.1 0 1.9.4 2.4 1.3l-1.1 1.1c-.3-.5-.7-.8-1.3-.8-.6 0-.9.3-.9.7 0 .5.3.7 1.1 1l.4.2c1.4.6 2.2 1.2 2.2 2.7 0 1.6-1.2 2.5-2.8 2.5-1.6 0-2.6-.7-3-1.7z" fill="#323330" />
      </svg>
    ),
    html: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M3 2l1.6 17.7L12 22l7.4-2.3L21 2H3z" fill="#E34F26" />
        <path d="M12 20.2l5.9-1.6 1.3-14.6H12v16.2z" fill="#EF652A" />
        <path d="M12 12.8H8.8l-.2-2.8H12V7.5H6.3l.5 5.3H12v-0.1zm0 4l-3.2-.9-.2-2.3H6.2l.4 4.2L12 19v-2.2z" fill="white" />
        <path d="M12 12.8v2.5l3.2-.9v-1.6H12zm0-5.3v2.5h3.5l-.3 3.4L12 14.8v2.2l4.9-1.4.3-3.8.5-5H12z" fill="#EBEBEB" />
      </svg>
    ),
    css: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M3 2l1.6 17.7L12 22l7.4-2.3L21 2H3z" fill="#1572B6" />
        <path d="M12 20.2l5.9-1.6 1.3-14.6H12v16.2z" fill="#33A9DC" />
        <path d="M12 12.8H8.8l-.2-2.8H12V7.5H6.3l.5 5.3H12v-0.1zm0 4l-3.2-.9-.2-2.3H6.2l.4 4.2L12 19v-2.2z" fill="white" />
        <path d="M12 12.8v2.5l3.2-.9v-1.6H12zm0-5.3v2.5h3.5l-.3 3.4L12 14.8v2.2l4.9-1.4.3-3.8.5-5H12z" fill="#EBEBEB" />
      </svg>
    ),
    tailwind: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.37 11 14.33 12 16 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C14.63 7 13.67 6 12 6zm-5 6C4.33 12 2.67 13.33 2 16c1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.37 17 9.33 18 11 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C9.63 13 8.67 12 7 12z" fill="#38BDF8" />
      </svg>
    ),
    python: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M11.9 2C9.26 2 7.5 3.14 7.5 5v2.5h4.5V8H5C3.07 8 2 9.41 2 11.5v3C2 16.6 3.07 18 5 18h1.5v-2.5c0-2.14 1.76-3.5 4.4-3.5h4.2c2.07 0 3.4-1.26 3.4-3V5c0-1.86-1.33-3-4.6-3zm-1.4 2c.56 0 1 .44 1 1s-.44 1-1 1-1-.44-1-1 .44-1 1-1z" fill="#3776AB" />
        <path d="M18.5 6.5V9c0 2.14-1.76 3.5-4.4 3.5H9.9c-2.07 0-3.4 1.26-3.4 3V19c0 1.86 1.33 3 4.6 3 2.64 0 4.4-1.14 4.4-3v-2.5H11V16h7c1.93 0 3-1.41 3-3.5v-3c0-2.09-1.07-3-3-3h-1.5zM13.5 20c-.56 0-1-.44-1-1s.44-1 1-1 1 .44 1 1-.44 1-1 1z" fill="#FFD845" />
      </svg>
    ),
    postgresql: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M17.6 2.7c-.5-.2-1.3-.3-2.2-.2.5.3.9.7 1.2 1.1.5-.3.8-.6 1-.9zM12 2C7.6 2 4 5.6 4 10c0 2.5 1.1 4.7 2.9 6.3l-.4 3.2c-.1.5.2.9.6 1 .1 0 .2 0 .3-.1l2.9-1.6c.5.1 1.1.2 1.7.2 4.4 0 8-3.6 8-8S16.4 2 12 2zm0 2c3.3 0 6 2.7 6 6s-2.7 6-6 6c-.5 0-1.1-.1-1.6-.2l-.3-.1-2 1.1.3-2.2-.2-.2C7 13.7 6 11.9 6 10c0-3.3 2.7-6 6-6z" fill="#336791" />
      </svg>
    ),
    supabase: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M11.9 2.4L4.5 13.8c-.3.5.1 1.2.7 1.2h7.3v6.6c0 .7.9 1 1.3.5l7.4-11.4c.3-.5-.1-1.2-.7-1.2h-7.3V3c0-.7-.9-1-1.3-.5z" fill="#3ECF8E" />
      </svg>
    ),
    openai: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path d="M22.2 10a5.5 5.5 0 00-3.7-5.2 5.5 5.5 0 00-9.3-2.5 5.5 5.5 0 00-5.4 3.7 5.5 5.5 0 001.7 6.4 5.5 5.5 0 003.7 5.2 5.5 5.5 0 009.3 2.5 5.5 5.5 0 005.4-3.7A5.5 5.5 0 0022.2 10zM12 16.3a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6z" fill="white" opacity="0.9" />
      </svg>
    ),
  }

  return (
    <span className="flex items-center justify-center w-8 h-8">
      {icons[name] ?? (
        <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px] text-white font-bold">
          {name[0].toUpperCase()}
        </span>
      )}
    </span>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 py-24"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="section-label mb-3">TEXNOLOGIYALAR</p>
          <h2
            id="skills-heading"
            className="font-heading text-3xl md:text-4xl font-bold text-white"
          >
            Ishlatadigan texnologiyalarim
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map(({ key, label }) => {
            const categorySkills = skills.filter((s) => s.category === key)
            return (
              <div key={key}>
                <div className="flex items-center gap-3 mb-5">
                  <p className="code-font text-[11px] text-slate-500 uppercase tracking-widest">
                    {label}
                  </p>
                  <div className="flex-1 h-px bg-white/[0.04]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 p-4 rounded-xl glass border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.03] transition-all duration-200 group"
                    >
                      <div className="shrink-0 opacity-90 group-hover:opacity-100 transition-opacity">
                        <TechIcon name={skill.icon} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white text-sm font-semibold mb-0.5">
                          {skill.name}
                        </p>
                        <p className="text-slate-500 text-xs leading-relaxed truncate">
                          {skill.context}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
