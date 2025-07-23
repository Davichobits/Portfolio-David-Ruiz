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
      className='flex items-center p-2 border-2 flex-col relative overflow-hidden'
    >
      <div className='absolute top-0 h-[150px] overflow-hidden shadow-md xl:h-full xl:left-0 xl:w-[250px]'>
        <Image
          className='w-full min-h-full bg-card'
          src={url}
          alt={title}
          width={300}
          height={300}
        />
      </div>

      <div className='mt-[150px] xl:mt-0 xl:ml-[250px]'>
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
