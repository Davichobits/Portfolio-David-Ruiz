import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export function Skills() {
  const skills = [
    { name: "HTML", url: "Expert" },
    { name: "CSS", url: "Expert" },
    { name: "Sass", url: "Expert" },
    { name: "Tailwind CSS", url: "Advanced" },
    { name: "Material-UI", url: "Advanced" },
    { name: "Figma", url: "Advanced" },
    { name: "Javascript", url: "Advanced" },
    { name: "TypeScript", url: "Advanced" },
    { name: "React", url: "Expert" },
    { name: "Next.js", url: "Advanced" },
    { name: "Firebase", url: "Advanced" },
    { name: "Dart", url: "Advanced" },
    { name: "Flutter", url: "Advanced" },
    { name: "Git", url: "Advanced" },
    { name: "GitHub", url: "Advanced" },
  ]

  return (
    <section id="skills" className="container py-12">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Image src={`/skills/${skill.name}.svg`} alt={skill.name} width={24} height={24} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{skill.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

