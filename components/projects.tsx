import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Documentation Site",
      url: '/projects/documentation-site.webp',
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      technologies: ["Tailwind CSS", "Docusaurus", "React", "Typescritpt"],
      link: "https://github.com/Davichobits/CodingTube-Docs",
    },
    {
      title: "Dashboard App",
      url: '/projects/dashboard-app.webp',
      description: "A responsive task management application with real-time updates.",
      technologies: [, "Tailwind CSS", "React", "Typescript", "Next.js"],
      link: "https://github.com/Davichobits/nextjs-dashboard",
    },
    // {
    //   title: "Personal Portfolio",
    //   description: "A responsive Frontend Developer portfolio",
    //   technologies: [, "Tailwind CSS", "React", "Typescript", "Next.js"],
    //   link: "https://github.com/Davichobits/Portfolio-David-Ruiz",
    // },
  ]

  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex items-center pl-4">
            <Image className="rounded-xl border bg-card" src={project.url} alt={project.title} width={200} height={200} />
            <div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

