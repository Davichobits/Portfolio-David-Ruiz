import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="#">
            <span className="hidden font-bold sm:inline-block">David Ruiz</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">
              Skills
            </a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">
              Projects
            </a>
            {/* <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">
              Contact
            </a> */}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

