import { useEffect, useRef, useState } from 'react'
import { ArrowRightIcon, GithubIcon, TerminalIcon, CpuIcon, DatabaseIcon, ZapIcon } from './icons'

const floatingCards = [
  {
    icon: TerminalIcon,
    label: 'Full-Stack',
    sub: 'React · TypeScript',
    delay: '0s',
    pos: 'top-4 right-0',
    color: 'text-[#63b3ed]',
  },
  {
    icon: DatabaseIcon,
    label: 'Supabase',
    sub: 'Realtime · Auth',
    delay: '0.8s',
    pos: 'bottom-16 right-8',
    color: 'text-[#a78bfa]',
  },
  {
    icon: CpuIcon,
    label: 'AI Texnologiyasi',
    sub: 'OpenAI API',
    delay: '1.6s',
    pos: 'top-1/2 -left-4 -translate-y-1/2',
    color: 'text-[#63b3ed]',
  },
  {
    icon: ZapIcon,
    label: 'PostgreSQL',
    sub: 'Ma\'lumotlar bazasi',
    delay: '0.4s',
    pos: 'bottom-4 left-8',
    color: 'text-[#a78bfa]',
  },
]

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 60)

    const cursorTimer = setInterval(() => {
      setCursor((v) => !v)
    }, 530)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [text])

  return (
    <span>
      {displayed}
      <span className={`inline-block w-0.5 h-5 bg-[#63b3ed] ml-0.5 align-middle transition-opacity ${cursor ? 'opacity-100' : 'opacity-0'}`} />
    </span>
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on mouse move
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!visualRef.current) return
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 12
      const y = (e.clientY / innerHeight - 0.5) * 8
      visualRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text content */}
          <div className="space-y-7">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-[#63b3ed]/20 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-slate-300 text-xs font-medium tracking-wide">
                Ish uchun ochiqman
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-2">
              <p className="section-label">TO'LIQ STACK DASTURCHI</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                Salom, men —{' '}
                <span className="gradient-text">Asilbek Hasanov.</span>
              </h1>
            </div>

            {/* Sub heading */}
            <h2 className="font-heading text-xl md:text-2xl font-medium text-slate-300 leading-snug">
              <TypewriterText text="Haqiqatan ishlaydigan raqamli mahsulotlar yarataman." />
            </h2>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              Frontend, backend, realtime systems va AI integrations — dasturiy
              ta'minotni noldan oxirigacha yozaman. Samarkand, Uzbekistan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#63b3ed] hover:bg-[#4da3de] text-[#050816] font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(99,179,237,0.3)]"
              >
                Loyihalarni ko'rish
                <ArrowRightIcon size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-white/[0.10] hover:border-white/[0.18] text-slate-300 hover:text-white font-medium text-sm rounded-xl transition-all duration-200"
              >
                Bog'lanish
              </a>
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-slate-500 hover:text-slate-300 font-medium text-sm rounded-xl transition-colors duration-200"
              >
                <GithubIcon size={15} />
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT: Developer visual */}
          <div
            className="relative hidden lg:flex justify-center items-center"
            style={{ transition: 'transform 0.15s ease-out' }}
            ref={visualRef}
          >
            {/* Central workspace panel */}
            <div className="relative w-72 h-80">
              {/* Main terminal card */}
              <div className="absolute inset-0 glass-strong rounded-2xl border border-white/[0.08] overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 code-font text-[11px] text-slate-500">
                    ~/portfolio
                  </span>
                </div>

                {/* Terminal body */}
                <div className="px-4 py-4 code-font text-[12px] space-y-2">
                  <div>
                    <span className="text-emerald-400">❯</span>{' '}
                    <span className="text-slate-300">whoami</span>
                  </div>
                  <div className="text-slate-500 pl-3">Asilbek Hasanov</div>

                  <div className="pt-1">
                    <span className="text-emerald-400">❯</span>{' '}
                    <span className="text-slate-300">cat role.txt</span>
                  </div>
                  <div className="text-[#63b3ed] pl-3">To'liq Stack Dasturchi</div>

                  <div className="pt-1">
                    <span className="text-emerald-400">❯</span>{' '}
                    <span className="text-slate-300">node --version</span>
                  </div>
                  <div className="text-slate-500 pl-3">React + TypeScript + Supabase</div>

                  <div className="pt-1">
                    <span className="text-emerald-400">❯</span>{' '}
                    <span className="text-slate-300">git log --oneline</span>
                  </div>
                  <div className="text-[#a78bfa] pl-3 text-[11px] space-y-0.5">
                    <div>a3f1b2c feat: add AI integration</div>
                    <div>9e2d4a1 fix: realtime subscription</div>
                    <div>c7f8a3e feat: blood-finder MVP</div>
                  </div>

                  <div className="pt-2 flex items-center gap-1">
                    <span className="text-emerald-400">❯</span>{' '}
                    <span className="text-slate-300 animate-pulse">_</span>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map(({ icon: Icon, label, sub, delay, pos, color }) => (
                <div
                  key={label}
                  className={`absolute ${pos} animate-float glass rounded-xl border border-white/[0.08] px-3 py-2 flex items-center gap-2.5 shadow-lg`}
                  style={{ animationDelay: delay }}
                >
                  <div className={`${color} opacity-80`}>
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-medium leading-none mb-0.5">
                      {label}
                    </p>
                    <p className="text-slate-500 text-[10px] leading-none code-font">
                      {sub}
                    </p>
                  </div>
                </div>
              ))}

              {/* Glow behind card */}
              <div
                className="absolute inset-0 -z-10 opacity-20 blur-3xl animate-pulse-slow"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, #63b3ed, transparent 70%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="code-font text-[11px] text-slate-500 tracking-widest uppercase">
            pastga
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </div>
    </section>
  )
}
