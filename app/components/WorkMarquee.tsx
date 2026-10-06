import Image from "next/image";
import { Icon } from "./Icons";

type Project = {
  title: string;
  tag: string;
  summary: string;
  image: string;
  href?: string;
};

// Education projects lead; the rest prove range across AI agents and RAG.
const projects: Project[] = [
  {
    title: "ExamineAI",
    tag: "EdTech · Assessment",
    summary: "AI exam generation and rubric-based grading with instant feedback and analytics.",
    image: "/work/examineai.png",
    href: "https://examinie.online",
  },
  {
    title: "IELTS Karo",
    tag: "EdTech · Test Prep",
    summary: "AI IELTS prep for all four skills, with a live AI speaking examiner and instant band scores.",
    image: "/work/ieltskaro.png",
    href: "https://ieltskaro.com/",
  },
  {
    title: "PanaAI",
    tag: "EdTech · Multi-Agent",
    summary: "Agents for onboarding, learning, assessment and revision across the student journey, for Panaversity.",
    image: "/work/panaai.png",
    href: "https://panaversity.org/",
  },
  {
    title: "DuoRead",
    tag: "EdTech · AI Reading",
    summary: "Turns any PDF into a study partner: chat, summaries, translations and vocabulary.",
    image: "/work/duoread.png",
    href: "https://duoread.app",
  },
  {
    title: "Career Compass",
    tag: "EdTech · Guidance",
    summary: "Six AI agents for resumes, interviews, learning paths and university matching.",
    image: "/work/career-compass.png",
  },
  {
    title: "TechCadets",
    tag: "EdTech · K-12 Platform",
    summary: "Live online AI and coding classes for grades 5 to 12 in Pakistan, with junior and senior tracks.",
    image: "/work/techcadets.png",
    href: "https://www.techcadets.pk/",
  },
  {
    title: "Hikmah AI",
    tag: "EdTech · Islamic Studies",
    summary: "AI companion for Dars-e-Nizami that decodes classical Arabic texts through five scholarly lenses.",
    image: "/work/hikmahai.png",
    href: "https://www.hikmahai.site/",
  },
  {
    title: "QuickRabita",
    tag: "Multi-Agent System",
    summary: "Emergency triage that classifies requests and routes them to specialised agents.",
    image: "/work/quickrabita.png",
    href: "https://quick-rabita-fe.vercel.app/",
  },
  {
    title: "CodeSync",
    tag: "RAG · MCP",
    summary: "Framework-specific documentation assistant for developers and coding agents.",
    image: "/work/codesync.png",
  },
  {
    title: "LLMetric",
    tag: "AI SaaS",
    summary: "Measures and improves how brands show up in ChatGPT, Perplexity and Grok answers.",
    image: "/work/llmetric.png",
  },
  {
    title: "Epidexa",
    tag: "Health AI",
    summary: "AI skin-health companion combining medical AI with dermatologist consultations.",
    image: "/work/epidexa.png",
  },
  {
    title: "Headline AI",
    tag: "Content Generation",
    summary: "Generates headlines, marketing copy and social posts with A/B testing.",
    image: "/work/headline-ai.png",
    href: "https://headline-ai-fe.vercel.app",
  },
  {
    title: "ClimeAI",
    tag: "AI Agents",
    summary: "Weather-aware travel and event planning powered by LangGraph agents.",
    image: "/work/climeai.png",
    href: "https://clime-ai.vercel.app/",
  },
];

export function WorkMarquee() {
  return (
    <section id="work" className="xn-section xn-section--surface xn-work">
      <div className="xn-container">
        <div className="xn-work__head">
          <h2 className="xn-h2">Products we&apos;ve built &amp; shipped</h2>
          <p>
            From AI exam engines to multi-agent platforms: real products, live in production, built by the
            Xentenix team.
          </p>
        </div>
      </div>

      <div className="xn-marquee">
        <div className="xn-marquee__track">
          <ProjectGroup />
          {/* Duplicate makes the loop seamless; hidden from assistive tech and tab order. */}
          <ProjectGroup duplicate />
        </div>
      </div>
    </section>
  );
}

function ProjectGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className="xn-marquee__group" aria-hidden={duplicate || undefined} inert={duplicate || undefined}>
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const body = (
    <>
      <div className="xn-project__media">
        <Image src={project.image} alt={`${project.title} screenshot`} fill sizes="340px" />
      </div>
      <div className="xn-project__body">
        <span className="xn-project__tag">{project.tag}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.href && (
          <span className="xn-project__link">
            View live <Icon name="arrow" size={15} />
          </span>
        )}
      </div>
    </>
  );

  if (!project.href) return <article className="xn-project">{body}</article>;

  return (
    <a className="xn-project" href={project.href} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  );
}
