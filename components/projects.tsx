import { Project } from '@/types/types'
import { ProjectCard } from './ui/project-card'

export function Projects() {

  const projects: Project[] = [
    {
      title: "Documentation Site",
      url: '/projects/documentation-site.webp',
      description: "Official CodingTube documentation.",
      technologies: ["Tailwind CSS", "Fumadocs", "Next.js", "Typescritpt", "Vite"],
      link: "https://github.com/Davichobits/codingtube-fumadocs",
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
      link: "https://github.com/Davichobits/browser-extension-manager",
    },
    {
      title: "Meet Landing Page",
      url: '/projects/meet.webp',
      description: "Landing page built with Astro",
      technologies: ["Typescript", "Astro", "Tailwind CSS"],
      link: "https://github.com/Davichobits/meet-landing-page",
    },
    {
      title: "News Home Page",
      url: '/projects/news.webp',
      description: "A responsive and modern homepage layout for a news blog website.",
      technologies: ["Typescript", "Astro", "Tailwind CSS"],
      link: "https://github.com/Davichobits/news-homepage",
    },
    {
      title: "Tip Calculator App",
      url: '/projects/calculator.webp',
      description: "Quickly calculates the tip and total cost per person.",
      technologies: ["Typescript", "React", "Tailwind CSS", "Zustand"],
      link: "https://github.com/Davichobits/tip-calculator-app-react",
    },
    {
      title: "Mortgage Repayment Calculator",
      url: '/projects/mortgage.webp',
      description: "Calculates monthly repayments based on loan amount and interest rate",
      technologies: ["Typescript", "React", "Tailwind CSS", "Context API", "React Hook Form"],
      link: "https://github.com/Davichobits/mortgage-repayment-calculator",
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

