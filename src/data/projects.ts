export interface Project {
  id: string
  number: string
  name: string
  tagline: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
  featured?: boolean
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'study-battle',
    number: '01',
    name: 'Study Battle',
    tagline: 'Real-time multiplayer quiz platform',
    description:
      'Real vaqtda do\'stlaringiz bilan bellashish imkonini beruvchi, 1000+ turli yo\'nalishlar bo\'yicha savollarga ega quiz battle platform. OpenAI orqali dinamik savollar generatsiya qilinadi.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Supabase'],
    liveUrl: 'https://www.studybattle.uz',
    githubUrl: 'https://github.com/asilbek120213031404-beep/AI-Study',
    featured: true,
    tags: ['Realtime Multiplayer', '1000+ Questions', 'AI-powered', 'Supabase'],
  },
  {
    id: 'van-life',
    number: '02',
    name: 'Van Life',
    tagline: 'Vacation rental & transport platform',
    description:
      'Bir necha kunga oilaviy dam olish maskanlari va transportlarini ijaraga olib, vaqtingizni maroqli o\'tkazishingiz mumkin bo\'lgan platforma. Smart search va AI-tavsiyalar bilan.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Supabase'],
    liveUrl: 'https://vanlife-murex-psi.vercel.app',
    githubUrl: 'https://github.com/asilbek120213031404-beep/Van-Life',
    featured: false,
    tags: ['Booking System', 'AI Search', 'Supabase'],
  },
  {
    id: 'blood-finder',
    number: '03',
    name: 'Blood Finder',
    tagline: 'Emergency donor matching platform',
    description:
      'Og\'ir bemorlar uchun kerakli qon guruhini topishga yordam beruvchi platforma. Turli qon guruhlariga mansub donorlarni real vaqtda qidirish va bog\'lanish imkonini beradi.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Supabase'],
    liveUrl: 'https://blood-finder-silk.vercel.app',
    githubUrl: 'https://github.com/asilbek120213031404-beep/Blood-Finder',
    featured: false,
    tags: ['Real-time', 'Search & Filter', 'Supabase'],
  },
]
