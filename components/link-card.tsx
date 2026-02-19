import { ArrowUpRight } from "lucide-react"

interface LinkCardProps {
  href: string
  title: string
  description: string
  icon: React.ReactNode
}

export function LinkCard({
  href,
  title,
  description,
  icon,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl border border-border bg-transparent px-5 py-4 transition-all duration-200 hover:border-foreground/20 hover:bg-card"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground/70">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-sm font-medium text-foreground">{title}</span>
        <span className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
    </a>
  )
}
