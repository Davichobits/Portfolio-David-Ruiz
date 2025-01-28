import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          David Ruiz
          <br className="hidden sm:inline" />
          Frontend Developer
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Passionate about creating beautiful, responsive, and user-friendly web applications. With expertise in React,
          Next.js, and modern frontend technologies.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <a href="#contact">Contact Me</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </Button>
      </div>
    </section>
  )
}

