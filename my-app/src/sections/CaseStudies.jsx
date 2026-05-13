import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "E-Commerce Website",
    summary:
      "Built a complete shopping flow with product discovery, cart logic, and secure checkout experience.",
    outcome: "Clearer purchase paths and a consistent UI across catalog and checkout.",
    stack: ["React", "ASP.NET", "SQL Server"],
    href: "https://github.com/shenalachintha/E-Commerce-Application.git",
  },
  {
    title: "AI Chatbot",
    summary:
      "Designed a real-time chatbot interface focused on fast responses and readable conversation history.",
    outcome: "Streamlined user interaction with a clean, low-friction chat UI.",
    stack: ["React", "ASP.NET", "AI"],
    href: "https://github.com/shenalachintha/react-aspnet-ai-chatbot.git",
  },
  {
    title: "Scholarship Management System",
    summary:
      "Structured scholarship applications, reviews, and approvals into a centralized workflow.",
    outcome: "Improved visibility across application stages and review steps.",
    stack: ["ASP.NET", "SQL Server", "C#"],
    href: "https://github.com/shenalachintha/Schcloarship-Management-System.git",
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 sm:py-28 relative overflow-hidden">
      <div className="absolute top-12 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-12 right-12 w-56 h-56 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Deep dives into
            <span className="font-serif italic font-normal text-white block text-2xl sm:text-3xl md:text-4xl">
              how the work gets done.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A closer look at the problem, execution, and outcomes behind a few
            of my favorite builds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <article
              key={study.title}
              className="group glass rounded-2xl p-5 sm:p-6 border border-border/60 hover:border-primary/60 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 140}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <a
                  href={study.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label={`Open ${study.title} repository`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                {study.summary}
              </p>

              <div className="mt-5 rounded-xl bg-surface/60 border border-border/60 p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Outcome
                </p>
                <p className="text-sm text-foreground mt-2">{study.outcome}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/60 text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
