import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="container py-12">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Contact Me</h2>
      <form className="space-y-4 max-w-md">
        <div>
          <Input type="text" placeholder="Your Name" />
        </div>
        <div>
          <Input type="email" placeholder="Your Email" />
        </div>
        <div>
          <Textarea placeholder="Your Message" />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </section>
  )
}

