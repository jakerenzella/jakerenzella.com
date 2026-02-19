import { ExpandableLinkCard } from "@/components/expandable-link-card";
import { LinkCard } from "@/components/link-card";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  DollarSign,
  GraduationCap,
  Mail,
  Newspaper,
  Skull,
  Wrench,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-svh max-w-xl flex-col px-6 py-16 md:py-24">
      {/* Header */}
      <header className="flex flex-col items-center text-center">
        <div className="relative flex w-full items-center justify-center">
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl text-balance">
            Dr Jake Renzella
          </h1>
          <div className="absolute right-0">
            <ThemeToggle />
          </div>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Senior Lecturer · Director of Studies (Computer Science) <br />
          School of Computer Science & Engineering · UNSW Sydney
        </p>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/80">
          I lead the Computing and Education Research Group, build pedagogical
          generative AI, and research whether it actually works. I lead UNSW{"'"}s
          partnership with{" "}
          <a
            href="https://dayofaiaustralia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-foreground/30 underline-offset-2 transition-colors hover:decoration-foreground/60"
          >
            Day of AI Australia
          </a>
          , delivering free AI literacy programs to 250,000+ students annually.
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {[
            "Pedagogical AI",
            "LLM Fine-Tuning",
            "AI Literacy (K-12)",
            "CS Education",
          ].map((topic) => (
            <Badge
              key={topic}
              variant="secondary"
              className="font-normal text-muted-foreground"
            >
              {topic}
            </Badge>
          ))}
        </div>

        <div className="mt-5">
          <SocialLinks />
        </div>
      </header>

      {/* Divider */}
      <div className="my-10 h-px w-full bg-border" role="separator" />

      {/* Selected Work */}
      <section aria-label="Selected Work" className="flex flex-col gap-3">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Selected Work
        </h2>
        {[
          {
            title:
              "dcc --help: Transforming the Role of the Compiler by Generating Context-Aware Error Explanations with Large Language Models",
            venue: "SIGCSE 2024",
            href: "https://doi.org/10.1145/3626252.3630822",
          },
          {
            title:
              "Verifying Student Identity in Oral Assessments with Deep Speaker",
            venue: "Computers & Education: AI, 2022",
            href: "https://doi.org/10.1016/j.caeai.2021.100044",
          },
          {
            title:
              "Foundations First: Improving C\u2019s Viability in Introductory Programming Courses with the Debugging C Compiler",
            venue: "SIGCSE 2023",
            href: "https://doi.org/10.1145/3545945.3569768",
          },
        ].map((pub) => (
          <a
            key={pub.href}
            href={pub.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-transparent px-5 py-4 transition-all duration-200 hover:border-foreground/20 hover:bg-card"
          >
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="text-sm font-medium text-foreground">
                {pub.title}
              </span>
              <span className="text-xs text-muted-foreground leading-relaxed">
                {pub.venue}
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </a>
        ))}
        <a
          href="https://scholar.google.com.au/citations?user=l_sP9GcAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          View all publications →
        </a>
      </section>

      {/* Divider */}
      <div className="my-14 h-px w-full bg-border" role="separator" />

      {/* Highlights */}
      <section aria-label="Highlights" className="flex flex-col gap-3">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Highlights
        </h2>
        <ExpandableLinkCard
          title="Day of AI Australia"
          description="Free AI literacy for every Australian school. Partner with us."
          icon={<img src="/doai-icon.webp" alt="" className="h-5 w-5 grayscale" />}
          links={[
            {
              href: "https://dayofaiaustralia.com",
              title: "Day of AI Australia",
            },
            {
              href: "https://blog.google/intl/en-au/feed/generative-ai-accelerator/",
              title: "Google.org Gen AI Accelerator",
            },
          ]}
        />
        <ExpandableLinkCard
          title="Grants & Funding"
          description="Over $2.1M in competitive research funding."
          icon={<DollarSign className="h-5 w-5" />}
          links={[
            {
              title: "Google.org Generative AI Accelerator",
              detail: "$1,500,000",
            },
            {
              title: "Australian Economic Accelerator Ignite Program",
              detail: "$480,000",
            },
            {
              title: "Google Award for Inclusion Research Program",
              detail: "$100,000",
            },
            { title: "UNSW EF Grant", detail: "$30,000" },
            { title: "Google CS4HS Grant (2018)", detail: "$15,000" },
            { title: "UNSW EFFECT Grant", detail: "$15,000" },
            { title: "Google CS4HS Grant (2017)", detail: "$15,000" },
            { title: "Google CS4HS Grant (2016)", detail: "$10,000" },
            { title: "NVIDIA Academic Grant (2025)", detail: "GPU hours" },
          ]}
        />
        <ExpandableLinkCard
          title="Dead Internet Theory"
          description="My writing and media on the theory that bots run the web."
          icon={<Skull className="h-5 w-5" />}
          links={[
            {
              href: "https://www.forbes.com/sites/conormurray/2025/10/13/ohanian-and-altman-warn-of-dead-internet-theory-what-is-it-and-how-is-ai-making-it-happen/",
              boldPrefix: "Forbes:",
              title: "Ohanian and Altman Warn of Dead Internet Theory",
            },
            {
              href: "https://theconversation.com/the-dead-internet-theory-makes-eerie-claims-about-an-ai-run-web-the-truth-is-more-sinister-229609",
              boldPrefix: "The Conversation:",
              title: "Eerie Claims About an AI-Run Web",
            },
            {
              href: "https://www.popularmechanics.com/science/a65997294/dead-internet-explained/",
              boldPrefix: "Popular Mechanics:",
              title: "Dead Internet Explained",
            },
            {
              href: "https://www.abc.net.au/btn/high/is-the-internet-dead/104897518",
              boldPrefix: "ABC Behind the News:",
              title: "Is the Internet Dead?",
            },
          ]}
        />
        <LinkCard
          href="https://www.afr.com/work-and-careers/education/winning-strategy-setting-guardrails-for-generative-ai-20240808-p5k0tr"
          title="AFR Award: Generative AI Guardrails"
          description="Australian Financial Review recognition for AI in education."
          icon={<Newspaper className="h-5 w-5" />}
        />
        <LinkCard
          href="https://www.unsw.edu.au/staff/jake-renzella"
          title="UNSW Research Profile"
          description="Publications, grants, and research activities."
          icon={<GraduationCap className="h-5 w-5" />}
        />

        {/* Projects */}
        <h2 className="mt-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Projects & Tools
        </h2>
        <LinkCard
          href="https://dcc.cse.unsw.edu.au"
          title="Open Source Tools"
          description="DCC, DCC Help, Formatif, and other education technology."
          icon={<Wrench className="h-5 w-5" />}
        />

        {/* Collaboration */}
        <h2 className="mt-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Collaborate
        </h2>
        <LinkCard
          href="mailto:jake.renzella@unsw.edu.au"
          title="Get in Touch"
          description="Funding, partnerships, supervision, media & speaking."
          icon={<Mail className="h-5 w-5" />}
        />
      </section>

      {/* Footer */}
      {/* <footer className="mt-16 flex flex-col items-center gap-2 text-center">
        <p className="text-xs text-muted-foreground/70">
          School of Computer Science & Engineering
        </p>
        <p className="text-xs text-muted-foreground/70">
          UNSW Sydney, Australia
        </p>
      </footer> */}
    </main>
  );
}
