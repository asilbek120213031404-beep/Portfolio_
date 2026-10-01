import { ArrowUpRightIcon, GithubIcon } from './icons'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import clsx from 'clsx'

function StudyBattlePreview() {
  return (
    <div className={clsx('relative', 'w-full', 'h-full', 'min-h-40', 'p-4', 'overflow-hidden')}>
      {/* Background */}
      <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-br', 'from-[#0d1b3e]', 'to-slate-950')} />

      {/* Players row */}
      <div className={clsx('relative', 'flex', 'gap-2', 'mb-3')}>
        {['Asilbek', 'Jasur'].map((name, i) => (
          <div
            key={name}
            className={clsx('flex-1', 'glass', 'rounded-lg', 'px-3', 'py-2', 'border', 'border-[rgba(255,255,255,0.08)]')}
          >
            <div className={clsx('flex', 'items-center', 'justify-between', 'mb-1')}>
              <span className={clsx('text-white', 'text-[10px]', 'font-medium')}>{name}</span>
              <span
                className={`text-[10px] font-bold ${i === 0 ? 'text-[#63b3ed]' : 'text-[#a78bfa]'}`}
              >
                {i === 0 ? '740' : '680'}
              </span>
            </div>
            <div className={clsx('w-full', 'border-[rgba(255,255,255,0.05)]', 'rounded-full', 'h-1')}>
              <div
                className={`h-1 rounded-full ${i === 0 ? 'bg-[#63b3ed]' : 'bg-[#a78bfa]'}`}
                style={{ width: i === 0 ? '74%' : '68%' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Question card */}
      <div className={clsx('relative', 'glass', 'rounded-lg', 'px-3', 'py-2.5', 'border', 'border-[rgba(255,255,255,0.08)]')}>
        <div className={clsx('flex', 'items-center', 'gap-2', 'mb-2')}>
          <span className={clsx('w-4', 'h-4', 'rounded-full', 'bg-[#63b3ed]/20', 'flex', 'items-center', 'justify-center')}>
            <span className={clsx('text-[#63b3ed]', 'text-[8px]', 'font-bold')}>Q</span>
          </span>
          <span className={clsx('text-slate-400', 'text-[10px]')}>7-savol, 10 tadan</span>
          <span className={clsx('ml-auto', 'text-emerald-400', 'text-[9px]', 'code-font')}>JONLI</span>
        </div>
        <p className={clsx('text-white', 'text-[10px]', 'leading-relaxed')}>
          Binary search vaqt murakkabligi qanday?
        </p>
        <div className={clsx('grid', 'grid-cols-2', 'gap-1', 'mt-2')}>
          {['O(n)', 'O(log n)', 'O(n²)', 'O(1)'].map((opt, i) => (
            <div
              key={opt}
              className={`px-2 py-1 rounded text-[9px] text-center border ${
                i === 1
                  ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-400'
                  : 'border-[rgba(255,255,255,0.06)] text-slate-500'
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function VanLifePreview() {
  return (
    <div className={clsx('relative', 'w-full', 'h-full', 'min-h-[140px]', 'p-4', 'overflow-hidden')}>
      <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-br', 'from-[#0a1a2e]', 'to-[#050816]')} />

      <div className={clsx('relative', 'space-y-2')}>
        {/* Header */}
        <div className={clsx('flex', 'items-center', 'justify-between', 'mb-3')}>
          <span className={clsx('text-white', 'text-[11px]', 'font-medium')}>Mavjud mashinalar</span>
          <span className={clsx('code-font', 'text-[9px]', 'text-slate-500')}>3 ta natija</span>
        </div>

        {/* Van cards */}
        {[
          { name: 'Qulay Kemper', type: 'Oddiy', price: '$49/kun', color: 'text-[#63b3ed]' },
          { name: 'Tog\' Safari', type: 'Qo\'pol', price: '$79/kun', color: 'text-[#a78bfa]' },
        ].map(({ name, type, price, color }) => (
          <div
            key={name}
            className={clsx('flex', 'items-center', 'gap-3', 'glass', 'rounded-lg', 'px-3', 'py-2', 'border', 'border-white/[0.06]')}
          >
            <div className={clsx('w-8', 'h-8', 'rounded-md', 'bg-white/[0.05]', 'flex', 'items-center', 'justify-center', 'shrink-0')}>
              <span className="text-base">🚐</span>
            </div>
            <div className={clsx('flex-1', 'min-w-0')}>
              <p className={clsx('text-white', 'text-[10px]', 'font-medium')}>{name}</p>
              <p className={`${color} text-[9px]`}>{type}</p>
            </div>
            <span className={clsx('text-slate-400', 'text-[10px]', 'shrink-0')}>{price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BloodFinderPreview() {
  return (
    <div className={clsx('relative', 'w-full', 'h-full', 'min-h-[140px]', 'p-4', 'overflow-hidden')}>
      <div className={clsx('absolute', 'inset-0', 'bg-gradient-to-br', 'from-[#1a0808]', 'to-[#050816]')} />

      <div className={clsx('relative', 'space-y-2')}>
        {/* Search bar */}
        <div className={clsx('glass', 'rounded-lg', 'px-3', 'py-2', 'border', 'border-white/[0.06]', 'flex', 'items-center', 'gap-2', 'mb-3')}>
          <span className={clsx('text-red-400', 'text-sm')}>🩸</span>
          <span className={clsx('text-slate-500', 'text-[10px]')}>Search blood group: A+</span>
        </div>

        {/* Donor cards */}
        {[
          { group: 'A+', name: 'Donor found', city: 'Samarkand', status: 'Available' },
          { group: 'O+', name: 'Donor found', city: 'Tashkent', status: 'Available' },
        ].map(({ group, name, city, status }) => (
          <div
            key={group + city}
            className={clsx('flex', 'items-center', 'gap-3', 'glass', 'rounded-lg', 'px-3', 'py-2', 'border', 'border-white/[0.06]')}
          >
            <div className={clsx('w-8', 'h-8', 'rounded-md', 'bg-red-500/10', 'flex', 'items-center', 'justify-center', 'shrink-0', 'border', 'border-red-500/20')}>
              <span className={clsx('text-red-400', 'text-[11px]', 'font-bold')}>{group}</span>
            </div>
            <div className={clsx('flex-1', 'min-w-0')}>
              <p className={clsx('text-white', 'text-[10px]', 'font-medium')}>{name}</p>
              <p className={clsx('text-slate-500', 'text-[9px]')}>{city}</p>
            </div>
            <span className={clsx('text-emerald-400', 'text-[9px]', 'code-font')}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const previews: Record<string, React.ReactNode> = {
  'study-battle': <StudyBattlePreview />,
  'van-life': <VanLifePreview />,
  'blood-finder': <BloodFinderPreview />,
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className={clsx('group', 'relative', 'glass', 'rounded-2xl', 'border', 'border-white/[0.08]', 'hover:border-white/[0.14]', 'overflow-hidden', 'transition-all', 'duration-300', 'hover:shadow-[0_0_40px_rgba(99,179,237,0.06)]')}>
      <div className={clsx('grid', 'md:grid-cols-2', 'gap-0')}>
        {/* Visual */}
        <div className={clsx('relative', 'bg-white/[0.02]', 'min-h-[220px]', 'flex', 'items-center', 'justify-center', 'overflow-hidden')}>
          {previews[project.id]}
          {/* Glow */}
          <div className={clsx('absolute', 'inset-0', 'pointer-events-none', 'bg-gradient-to-r', 'from-transparent', 'to-[#050816]/20')} />
        </div>

        {/* Content */}
        <div className={clsx('p-7', 'flex', 'flex-col', 'justify-between')}>
          <div>
            <div className={clsx('flex', 'items-center', 'gap-3', 'mb-4')}>
              <span className={clsx('code-font', 'text-[11px]', 'text-slate-600')}>{project.number}</span>
              <span className={clsx('px-2', 'py-0.5', 'rounded-full', 'text-[10px]', 'font-medium', 'bg-[#63b3ed]/10', 'text-[#63b3ed]', 'border', 'border-[#63b3ed]/20')}>
                Asosiy loyiha
              </span>
            </div>

            <h3 className={clsx('font-heading', 'text-2xl', 'font-bold', 'text-white', 'mb-2')}>
              {project.name}
            </h3>
            <p className={clsx('text-slate-400', 'text-sm', 'leading-relaxed', 'mb-4')}>
              {project.description}
            </p>

            {/* Tags */}
            <div className={clsx('flex', 'flex-wrap', 'gap-1.5', 'mb-5')}>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={clsx('px-2', 'py-0.5', 'rounded-md', 'text-[10px]', 'text-slate-400', 'bg-white/[0.04]', 'border', 'border-white/[0.06]')}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tech stack */}
            <div className={clsx('flex', 'flex-wrap', 'gap-2')}>
              {project.tech.map((t) => (
                <span key={t} className={clsx('code-font', 'text-[11px]', 'text-slate-500')}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={clsx('flex', 'gap-3', 'mt-6')}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('group/btn', 'inline-flex', 'items-center', 'gap-1.5', 'text-sm', 'font-medium', 'text-white', 'bg-[#63b3ed]/10', 'hover:bg-[#63b3ed]/20', 'border', 'border-[#63b3ed]/20', 'hover:border-[#63b3ed]/40', 'px-4', 'py-2', 'rounded-xl', 'transition-all', 'duration-200')}
            >
              Jonli Ko'rinish
              <ArrowUpRightIcon size={13} className={clsx('group-hover/btn:translate-x-0.5', 'group-hover/btn:-translate-y-0.5', 'transition-transform')} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx('inline-flex', 'items-center', 'gap-1.5', 'text-sm', 'text-slate-400', 'hover:text-white', 'transition-colors', 'px-4', 'py-2')}
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={clsx('group', 'relative', 'glass', 'rounded-2xl', 'border', 'border-white/[0.08]', 'hover:border-white/[0.14]', 'overflow-hidden', 'transition-all', 'duration-300', 'hover:shadow-[0_0_30px_rgba(99,179,237,0.05)]', 'flex', 'flex-col')}>
      {/* Preview */}
      <div className={clsx('relative', 'bg-white/[0.02]', 'min-h-[170px]', 'flex', 'items-center', 'justify-center', 'overflow-hidden')}>
        {previews[project.id]}
      </div>

      {/* Content */}
      <div className={clsx('p-5', 'flex', 'flex-col', 'flex-1')}>
        <div className={clsx('flex', 'items-center', 'justify-between', 'mb-3')}>
          <span className={clsx('code-font', 'text-[11px]', 'text-slate-600')}>{project.number}</span>
          <div className={clsx('flex', 'gap-1.5')}>
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={clsx('px-1.5', 'py-0.5', 'rounded', 'text-[9px]', 'text-slate-500', 'bg-white/[0.03]', 'border', 'border-white/[0.05]')}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className={clsx('font-heading', 'text-lg', 'font-bold', 'text-white', 'mb-1.5')}>
          {project.name}
        </h3>
        <p className={clsx('text-slate-500', 'text-[13px]', 'leading-relaxed', 'mb-4', 'flex-1')}>
          {project.tagline}
        </p>

        {/* Tech */}
        <div className={clsx('flex', 'flex-wrap', 'gap-1.5', 'mb-4')}>
          {project.tech.map((t) => (
            <span key={t} className={clsx('code-font', 'text-[10px]', 'text-slate-600')}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={clsx('flex', 'gap-3', 'pt-3', 'border-t', 'border-white/[0.05]')}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx('group/btn', 'flex-1', 'inline-flex', 'items-center', 'justify-center', 'gap-1.5', 'text-xs', 'font-medium', 'text-white', 'bg-white/[0.05]', 'hover:bg-white/[0.09]', 'border', 'border-white/[0.08]', 'px-3', 'py-2', 'rounded-lg', 'transition-all', 'duration-200')}
          >
            Jonli Ko'rinish
            <ArrowUpRightIcon size={11} className={clsx('group-hover/btn:translate-x-0.5', 'group-hover/btn:-translate-y-0.5', 'transition-transform')} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx('inline-flex', 'items-center', 'justify-center', 'gap-1.5', 'text-xs', 'text-slate-500', 'hover:text-white', 'border', 'border-white/[0.06]', 'hover:border-white/[0.10]', 'px-3', 'py-2', 'rounded-lg', 'transition-all', 'duration-200')}
            aria-label={`${project.name} GitHub repository`}
          >
            <GithubIcon size={13} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section
      id="projects"
      className={clsx('relative', 'z-10', 'py-24')}
      aria-labelledby="projects-heading"
    >
      <div className={clsx('max-w-6xl', 'mx-auto', 'px-6')}>
        {/* Header */}
        <div className="mb-14">
          <p className={clsx('section-label', 'mb-3')}>TANLANGAN ISHLAR</p>
          <h2
            id="projects-heading"
            className={clsx('font-heading', 'text-3xl', 'md:text-4xl', 'font-bold', 'text-white')}
          >
            Tanlangan loyihalar
          </h2>
          <p className={clsx('text-slate-500', 'text-sm', 'mt-2')}>
            Men yaratgan ba'zi mahsulotlar va ilovalar.
          </p>
        </div>

        {/* Featured project */}
        <div className="mb-5">
          <FeaturedProjectCard project={featured} />
        </div>

        {/* Two column grid */}
        <div className={clsx('grid', 'md:grid-cols-2', 'gap-5')}>
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
