import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export function Skills() {
  const skills = [
    "HTML", "CSS", "Sass", "Tailwind CSS", "Material-UI", "Figma", 
    "Javascript", "TypeScript", "React", "Next", "Firebase", 
    "Dart", "Flutter", "Git", "GitHub"
  ]

  return (
    <section id="skills" className="container py-12">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <Card key={skill}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Image src={`/skills/${skill}.svg`} alt={skill} width={24} height={24} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{skill}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

