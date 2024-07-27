import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { FacebookIcon, Mail, Phone, XIcon } from "lucide-react"
import { Link } from "react-router-dom"

function ContactCard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Get in Touch</h1>
        <p className="text-muted-foreground">
          Thank you for reaching out! We're here to help. Please don't hesitate to contact us with any questions or
          concerns.
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <Link to="#" className="text-primary hover:underline">
              support@blogs.com
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <Link to="#" className="text-primary hover:underline">
              +252 (61) 567-890-77
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link to="#" className="text-muted-foreground hover:text-primary">
            <XIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-primary">
            <GitHubLogoIcon className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link to="#" className="text-muted-foreground hover:text-primary">
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactCard