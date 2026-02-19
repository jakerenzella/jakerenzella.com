"use client"

import { ArrowUpRight } from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

interface ExpandableLinkCardProps {
  title: string
  description: string
  icon: React.ReactNode
  links: { href?: string; title: string; detail?: string; boldPrefix?: string }[]
}

export function ExpandableLinkCard({
  title,
  description,
  icon,
  links,
}: ExpandableLinkCardProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item"
        className="rounded-xl border border-border transition-all duration-200 hover:border-foreground/20 hover:bg-card !border-b bg-transparent"
      >
        <AccordionTrigger className="px-5 py-4 hover:no-underline">
          <span className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground/70">
              {icon}
            </span>
            <span className="flex min-w-0 flex-col text-left">
              <span className="text-sm font-medium text-foreground">
                {title}
              </span>
              <span className="text-xs text-muted-foreground leading-relaxed">
                {description}
              </span>
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent className="px-5">
          <ul className="flex flex-col gap-1">
            {links.map((link, i) =>
              link.href ? (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary"
                  >
                    <span className="flex-1">
                      {link.boldPrefix && (
                        <span className="font-semibold">{link.boldPrefix} </span>
                      )}
                      {link.title}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-foreground" />
                  </a>
                </li>
              ) : (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground/80"
                >
                  <span className="flex-1">{link.title}</span>
                  {link.detail && (
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {link.detail}
                    </span>
                  )}
                </li>
              ),
            )}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
