import { GithubIcon, LinkedinIcon, TelegramIcon } from './icons'
import clsx from 'clsx'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/asilbek120213031404-beep',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: LinkedinIcon,
  },
  {
    label: 'Telegram',
    href: 'https://t.me/Hasanov_A_2010',
    icon: TelegramIcon,
  },
]

export default function Footer() {
  return (
    <footer
      className={clsx('relative', 'z-10', 'border-t', 'border-white/[0.05]')}
      role="contentinfo"
    >
      <div className={clsx('max-w-6xl', 'mx-auto', 'px-6', 'py-8')}>
        <div className={clsx('flex', 'flex-col', 'sm:flex-row', 'items-center', 'justify-between', 'gap-4')}>
          {/* Left */}
          <div>
            <p className={clsx('font-heading', 'font-semibold', 'text-white', 'text-sm')}>
              Asilbek Hasanov
            </p>
            <p className={clsx('text-slate-600', 'text-xs', 'mt-0.5')}>Full-Stack Developer</p>
          </div>

          {/* Right */}
          <div className={clsx('flex', 'items-center', 'gap-5')}>
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx('text-slate-600', 'hover:text-slate-400', 'transition-colors')}
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
            <span className={clsx('text-slate-700', 'text-xs', 'ml-2')}>
              © 2026 Asilbek Hasanov
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

