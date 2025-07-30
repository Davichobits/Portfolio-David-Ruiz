import { Project } from '@/types/types'
import { ProjectCard } from './ui/project-card'

export function Projects() {

  const projects: Project[] = [
    {
      title: "Documentation Site",
      url: '/projects/documentation-site.webp',
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      technologies: ["Tailwind CSS", "Docusaurus", "React", "Typescritpt", "Vite"],
      link: "https://github.com/Davichobits/CodingTube-Docs",
    },
    {
      title: "Visual Studio Code extension",
      url: '/projects/marketplace.webp',
      description: "Variables generator from Frontend Challenge Instrucctions into CSS o Tailwind",
      technologies: ["Typescript", "Node"],
      link: "https://github.com/Davichobits/css-variables-generator",
    },
    {
      title: "Product list with cart",
      url: '/projects/cart.webp',
      description: "A product list with cart functionality built with React.",
      technologies: ["Typescript", "React", "Tailwind CSS", "Zustand", "Vite"],
      link: "https://github.com/Davichobits/product-list-with-cart",
    },
    {
      title: "Browser Extension Manager",
      url: '/projects/manager.webp',
      description: "A browser extension with dark and light mode.",
      technologies: ["Javascript", "React", "Tailwind CSS", "Vite"],
      link: "https://browser-extension-manager-two.vercel.app/",
    },
    {
      title: "Meet Landing Page",
      url: '/projects/meet.webp',
      description: "Landing page built with Astro",
      technologies: ["Typescript", "Astro", "Tailwind CSS"],
      link: "https://meet-landing-page-drd.netlify.app/",
    },
    {
      title: "News Home Page",
      url: '/projects/news.webp',
      description: "A responsive and modern homepage layout for a news blog website.",
      technologies: ["Typescript", "Astro", "Tailwind CSS"],
      link: "https://news-homepage-drd.netlify.app//",
    },
  ]

  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

