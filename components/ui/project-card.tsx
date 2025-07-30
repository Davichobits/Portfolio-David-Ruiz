import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Project } from '@/types/types';

export const ProjectCard = ({
  title,
  url,
  description,
  technologies,
  link,
}: Project) => {
  return (
    <Card
      key={title}
      className='flex items-center p-2 border-2 flex-col relative overflow-hidden h-60'
    >
      <div className='absolute top-0 z-0 overflow-hidden shadow-md xl:h-full xl:left-0 xl:w-[250px]'>
        <Image
          className='w-full min-h-full'
          src={url}
          alt={title}
          width={300}
          height={300}
        />
      </div>

      <div className='bg-black/75 xl:bg-transparent absolute inset-0'></div>

      <div className='absolute z-10 inset-0 cursor-pointer hover:block xl:mt-0 xl:ml-[250px]'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-wrap gap-2'>
            {technologies.map((tech) => (
              <Badge key={tech} variant='secondary'>
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              View Project
            </a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};
