import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js and Stripe integration.",
      technologies: ["Next.js", "React", "Stripe", "Tailwind CSS"],
      link: "https://github.com/janedoe/ecommerce-platform",
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates.",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "https://github.com/janedoe/task-management-app",
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      link: "https://github.com/janedoe/weather-dashboard",
    },
  ]

  return (
    <section id="projects" className="container py-12">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
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
          </Card>
        ))}
      </div>
    </section>
  )
}

