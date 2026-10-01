import { useState, type FormEvent } from 'react'
import { MailIcon, GithubIcon, LinkedinIcon, TelegramIcon } from './icons'
import { Send } from 'lucide-react'
import clsx from 'clsx'

interface FormState {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const contactLinks = [
  {
    label: 'Email',
    value: 'mrasilbek3@gmail.com',
    href: 'mailto:mrasilbek3@gmail.com',
    icon: MailIcon,
    description: 'Direct email',
  },
  {
    label: 'Telegram',
    value: '@Hasanov_A_2010',
    href: 'https://t.me/Hasanov_A_2010',
    icon: TelegramIcon,
    description: 'Quick messages',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com',
    href: 'https://linkedin.com',
    icon: LinkedinIcon,
    description: 'Professional network',
  },
  {
    label: 'GitHub',
    value: 'github.com/asilbek120213031404-beep',
    href: 'https://github.com/asilbek120213031404-beep',
    icon: GithubIcon,
    description: 'Open source',
  },
]

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim()) errors.name = 'Ismingizni kiriting'
  if (!form.email.trim()) {
    errors.email = 'Email kiriting'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email noto\'g\'ri formatda'
  }
  if (!form.message.trim()) errors.message = 'Xabar kiriting'
  else if (form.message.trim().length < 10) errors.message = 'Xabar kamida 10 ta belgidan iborat bo\'lishi kerak'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }))
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const newErrors = validate(form)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name as keyof FormErrors] }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    const newErrors = validate(form)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
      window.location.href = `mailto:mrasilbek3@gmail.com?subject=${subject}&body=${body}`
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  const inputBase =
    'w-full bg-white/[0.03] border rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:ring-1 transition-all duration-200'
  const inputNormal = 'border-white/[0.08] focus:border-[#63b3ed]/40 focus:ring-[#63b3ed]/20'
  const inputError = 'border-red-500/40 focus:border-red-500/40 focus:ring-red-500/10'

  return (
    <section
      id="contact"
      className={clsx('relative', 'z-10', 'py-24')}
      aria-labelledby="contact-heading"
    >
      <div className={clsx('max-w-6xl', 'mx-auto', 'px-6')}>
        {/* Header */}
        <div className="mb-14">
          <p className={clsx('section-label', 'mb-3')}>ALOQA</p>
          <h2
            id="contact-heading"
            className={clsx('font-heading', 'text-3xl', 'md:text-4xl', 'font-bold', 'text-white')}
          >
            Birgalikda foydali loyihalar yarataylik.
          </h2>
          <p className={clsx('text-slate-500', 'text-sm', 'mt-2', 'max-w-md')}>
            Yangi loyiha, hamkorlik yoki shunchaki suhbatlashish uchun bog'lanishingiz mumkin.
          </p>
        </div>

        <div className={clsx('grid', 'lg:grid-cols-2', 'gap-10')}>
          {/* Left: Contact links */}
          <div className="space-y-3">
            {contactLinks.map(({ label, value, href, icon: Icon, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className={clsx('flex', 'items-center', 'gap-4', 'p-4', 'glass', 'rounded-xl', 'border', 'border-white/[0.07]', 'hover:border-white/[0.15]', 'transition-all', 'duration-200', 'group')}
              >
                <div className={clsx('w-9', 'h-9', 'rounded-lg', 'bg-sky-400/10', 'flex', 'items-center', 'justify-center', 'text-[#63b3ed]', 'shrink-0')}>
                  <Icon size={16} />
                </div>
                <div className={clsx('flex-1', 'min-w-0')}>
                  <p className={clsx('text-white', 'text-sm', 'font-medium')}>{label}</p>
                  <p className={clsx('text-slate-500', 'text-xs', 'truncate')}>{value}</p>
                </div>
                <span className={clsx('text-slate-600', 'text-[11px]', 'group-hover:text-slate-400', 'transition-colors', 'shrink-0')}>
                  {description}
                </span>
              </a>
            ))}
          </div>

          {/* Right: Form */}
          <div className={clsx('glass', 'rounded-2xl', 'border', 'border-[rgba(255,255,255,0.08)]', 'p-6')}>
            <p className={clsx('text-slate-400', 'text-sm', 'mb-5')}>
              Yoki to'g'ridan-to'g'ri xabar yuboring — email orqali yo'naltiriladi.
            </p>

            {submitted && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                Rahmat! Xabaringiz yozildi va pochtangiz ochilmoqda...
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className={clsx('block', 'text-xs', 'text-slate-500', 'mb-1.5', 'font-medium')}>
                  Ism
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Ismingiz"
                  autoComplete="name"
                  className={`${inputBase} ${errors.name && touched.name ? inputError : inputNormal}`}
                  aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                  aria-invalid={!!(errors.name && touched.name)}
                />
                {errors.name && touched.name && (
                  <p id="name-error" className={clsx('mt-1', 'text-xs', 'text-red-400')} role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={clsx('block', 'text-xs', 'text-slate-500', 'mb-1.5', 'font-medium')}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="email@example.com"
                  autoComplete="email"
                  className={`${inputBase} ${errors.email && touched.email ? inputError : inputNormal}`}
                  aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  aria-invalid={!!(errors.email && touched.email)}
                />
                {errors.email && touched.email && (
                  <p id="email-error" className={clsx('mt-1', 'text-xs', 'text-red-400')} role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={clsx('block', 'text-xs', 'text-slate-500', 'mb-1.5', 'font-medium')}>
                  Xabar
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Loyiha, hamkorlik yoki shunchaki salom..."
                  className={`${inputBase} resize-none ${errors.message && touched.message ? inputError : inputNormal}`}
                  aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                  aria-invalid={!!(errors.message && touched.message)}
                />
                {errors.message && touched.message && (
                  <p id="message-error" className={clsx('mt-1', 'text-xs', 'text-red-400')} role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={clsx('group', 'w-full', 'flex', 'items-center', 'justify-center', 'gap-2', 'px-5', 'py-3', 'bg-[#63b3ed]', 'hover:bg-[#4da3de]', 'text-slate-950', 'font-semibold', 'text-sm', 'rounded-xl', 'transition-all', 'duration-200', 'hover:shadow-[0_0_20px_rgba(99,179,237,0.25)]')}
              >
                <Send size={14} className={clsx('group-hover:translate-x-0.5', 'transition-transform')} />
                Xabar yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

