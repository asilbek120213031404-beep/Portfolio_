import { useState, useEffect, useCallback } from 'react'
import { GithubIcon, LinkedinIcon, MenuIcon, CloseIcon } from './icons'
import clsx from 'clsx'

const navLinks = [
  { label: 'Bosh sahifa', href: '#home' },
  { label: 'Men haqimda', href: '#about' },
  { label: 'Texnologiyalar', href: '#skills' },
  { label: 'Loyihalar', href: '#projects' },
  { label: 'Tajriba', href: '#experience' },
  { label: 'Aloqa', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
      setMenuOpen(false)
    },
    []
  )

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-strong border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.3)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav
          className={clsx('max-w-6xl', 'mx-auto', 'px-6', 'h-16', 'flex', 'items-center', 'justify-between')}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className={clsx('font-heading', 'font-semibold', 'text-white', 'text-lg', 'tracking-tight', 'hover:opacity-80', 'transition-opacity', 'focus-visible:rounded')}
            aria-label="Asilbek Hasanov - Back to top"
          >
            Asilbek
            <span className="text-[#63b3ed]">.</span>
          </a>

          {/* Desktop nav links */}
          <ul className={clsx('hidden', 'md:flex', 'items-center', 'gap-8')} role="list">
            {navLinks.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeSection === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`nav-link-hover text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right: social + mobile hamburger */}
          <div className={clsx('flex', 'items-center', 'gap-3')}>
            <a
              href="https://github.com/asilbek120213031404-beep"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('hidden', 'md:flex', 'items-center', 'justify-center', 'w-9', 'h-9', 'rounded-lg', 'text-slate-400', 'hover:text-white', 'hover:border-[rgba(255,255,255,0.06)]', 'transition-all', 'duration-200')}
              aria-label="GitHub profile"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('hidden', 'md:flex', 'items-center', 'justify-center', 'w-9', 'h-9', 'rounded-lg', 'text-slate-400', 'hover:text-white', 'hover:border-[rgba(255,255,255,0.06)]', 'transition-all', 'duration-200')}
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon size={17} />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className={clsx('md:hidden', 'flex', 'items-center', 'justify-center', 'w-9', 'h-9', 'rounded-lg', 'text-slate-400', 'hover:text-white', 'hover:border-[rgba(255,255,255,0.06)]', 'transition-all', 'duration-200')}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Menyuni yopish' : 'Menyuni ochish'}
            >
              {menuOpen ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 flex flex-col pt-16 transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(5, 8, 22, 0.97)', backdropFilter: 'blur(20px)' }}
      >
        <ul className={clsx('flex', 'flex-col', 'px-6', 'pt-8', 'gap-1')} role="list">
          {navLinks.map(({ label, href }, i) => (
            <li
              key={href}
              style={{
                transform: menuOpen ? 'translateX(0)' : 'translateX(-16px)',
                opacity: menuOpen ? 1 : 0,
                transition: `transform 0.3s ease ${i * 0.05}s, opacity 0.3s ease ${i * 0.05}s`,
              }}
            >
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={clsx('flex', 'items-center', 'py-4', 'text-xl', 'font-medium', 'text-slate-300', 'hover:text-white', 'border-b', 'border-[rgba(255,255,255,0.05)]', 'transition-colors')}
              >
                <span className={clsx('code-font', 'text-xs', 'text-[#63b3ed]', 'mr-4', 'opacity-60')}>
                  0{i + 1}
                </span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={clsx('flex', 'gap-4', 'px-6', 'mt-8')}>
          <a
            href="https://github.com/asilbek120213031404-beep"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx('flex', 'items-center', 'gap-2', 'text-slate-400', 'hover:text-white', 'transition-colors')}
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx('flex', 'items-center', 'gap-2', 'text-slate-400', 'hover:text-white', 'transition-colors')}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  )
}
