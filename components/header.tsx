import { ModeToggle } from '@/components/mode-toggle';
import { Github, Youtube, Linkedin } from 'lucide-react';
import { ReactElement } from 'react';

interface Media {
  name: string;
  icon: ReactElement;
  url: string;
}

const mediaLinks: Media[] = [
  {
    name: 'Github',
    icon: <Github />,
    url: 'https://github.com/Davichobits',
  },
  {
    name: 'Youtube',
    icon: <Youtube />,
    url: 'https://www.youtube.com/@CodingTube',
  },
  {
    name: 'Linkedin',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/davidirc/',
  },
];

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center'>
        <div className='mr-4 hidden md:flex'>
          <a className='mr-6 flex items-center space-x-2' href='#'>
            <span className='hidden font-bold sm:inline-block'>David Ruiz</span>
          </a>
          <nav className='flex items-center space-x-6 text-sm font-medium'>
            <a
              className='transition-colors hover:text-foreground/80 text-foreground/60'
              href='#skills'
            >
              Skills
            </a>
            <a
              className='transition-colors hover:text-foreground/80 text-foreground/60'
              href='#projects'
            >
              Projects
            </a>
          </nav>
        </div>
        <div className='flex flex-1 items-center justify-between gap-12 space-x-2 md:justify-end'>
          <ul className='flex gap-4'>
            {mediaLinks.map((mediaLink) => (
              <li key={mediaLink.name}>
                <a href={mediaLink.url} target='_blank'>
                  {mediaLink.icon}
                </a>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
