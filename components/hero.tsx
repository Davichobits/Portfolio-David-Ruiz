import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Image
        src="/Profile.webp"
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
          Highly specialized Frontend Developer with experience delivering responsive, scalable, and high-performance web and mobile applications. Skilled in technologies like React.js, Next.js, TypeScript, JavaScript and Astro.
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

