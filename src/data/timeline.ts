export interface TimelineItem {
  year: string
  title: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Started building seriously',
    description:
      'First real projects — HTML/CSS/JS bilan boshlandi. Dastlabki React va komponent arxitekturasini o\'rgandim.',
  },
  {
    year: '2025',
    title: 'Modern frontend stack',
    description:
      'TypeScript va Tailwind CSS bilan ishlashni boshladim. Component-driven development, routing va state management.',
  },
  {
    year: '2025–2026',
    title: 'Full-stack va AI',
    description:
      'Supabase orqali backend: auth, realtime, database. OpenAI integratsiyalari bilan AI-powered apps yarata boshladim.',
  },
  {
    year: 'Present',
    title: 'Realtime products',
    description:
      'Study Battle, Van Life, Blood Finder — real foydalanuvchilar uchun production-ready applications.',
  },
]
