import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Image
        src="/profile.webp"
        width={200}
        height={200}
        alt="David Ruiz profile picture"
        className="rounded-full"
      />
      <div>
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          David Ruiz
          <br className="hidden sm:inline" />
          Frontend Developer
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Passionate about creating beautiful, responsive, and user-friendly web applications. My ultimate ambition is to work remotely, collaborating with international teams and contributing to impactful projects.
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        <Button asChild>
          <a href="#contact">Contact Me</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </Button>
      </div>
      </div>
    </section>
  )
}

