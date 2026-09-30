export interface Skill {
  name: string
  context: string
  category: 'frontend' | 'backend' | 'ai'
  icon: string
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    context: 'Interaktiv UI va komponent arxitekturasi',
    category: 'frontend',
    icon: 'react',
  },
  {
    name: 'TypeScript',
    context: 'Xavfsiz tipli frontend arxitekturasi',
    category: 'frontend',
    icon: 'typescript',
  },
  {
    name: 'JavaScript',
    context: 'Dinamik mantiq va brauzer API\'lari',
    category: 'frontend',
    icon: 'javascript',
  },
  {
    name: 'HTML',
    context: 'Semantik, qulay belgilash tili',
    category: 'frontend',
    icon: 'html',
  },
  {
    name: 'CSS',
    context: 'Loyiha, animatsiyalar va stil',
    category: 'frontend',
    icon: 'css',
  },
  {
    name: 'Tailwind CSS',
    context: 'Utility-first tezkor UI ishlab chiqish',
    category: 'frontend',
    icon: 'tailwind',
  },

  // Backend & Database
  {
    name: 'Python',
    context: 'Backend skriptlar va avtomatlashtirish',
    category: 'backend',
    icon: 'python',
  },
  {
    name: 'PostgreSQL',
    context: 'Relyatsion ma\'lumotlar va kengayadigan bazalar',
    category: 'backend',
    icon: 'postgresql',
  },
  {
    name: 'Supabase',
    context: 'Auth, ma\'lumotlar bazasi, real vaqt va backend',
    category: 'backend',
    icon: 'supabase',
  },

  // AI
  {
    name: 'OpenAI',
    context: 'AI bilan boyitilgan ilova xususiyatlari',
    category: 'ai',
    icon: 'openai',
  },
]

export const skillCategories = [
  { key: 'frontend' as const, label: 'Frontend' },
  { key: 'backend' as const, label: 'Backend va Ma\'lumotlar Bazasi' },
  { key: 'ai' as const, label: 'Sun\'iy Intellekt' },
]
