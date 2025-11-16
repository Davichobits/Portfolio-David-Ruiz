import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

export function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'Sass',
    'Tailwind CSS',
    'Material-UI',
    'Figma',
    'Javascript',
    'TypeScript',
    'React',
    'RHF',
    'Zustand',
    'Next',
    'Astro',
    'Firebase',
    'Dart',
    'Flutter',
    'Git',
    'GitHub',
  ];

  return (
    <section id='skills' className='container py-12'>
      <h2 className='text-2xl font-bold tracking-tight mb-6'>Skills</h2>
      <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {skills.map((skill) => (
          <Card key={skill} className='relative group'>
            <div className='absolute -inset-2 rounded-lg group-hover:bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-75 blur'></div>
            <div className='relative inset-0 h-full rounded-lg bg-card text-card-foreground'>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2 '>
                <Image
                  className='size-6'
                  src={`/skills/${skill.toLocaleLowerCase()}.svg`}
                  alt={skill}
                  width={24}
                  height={24}
                />
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>{skill}</div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
