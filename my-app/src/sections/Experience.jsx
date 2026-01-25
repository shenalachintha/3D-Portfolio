import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Full-Stack Developer (Intern)",
    company: "Tech Labs",
    location: "Remote",
    period: "Jun 2025 — Present",
    summary:
      "Building internal dashboards with React, Node.js, and SQL Server; shipping features in weekly sprints.",
    skills: ["React", "Node.js", "SQL Server", "REST APIs"],
  },
  {
    role: "Freelance Developer",
    company: "Various Clients",
    location: "Remote",
    period: "2024 — 2025",
    summary:
      "Delivered small-business sites and admin tools focused on clean UI, accessibility, and maintainable code.",
    skills: ["Next.js", "Tailwind", "Accessibility", "Vercel"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-12 right-6 w-56 h-56 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Work that shaped my skills
            <span className="font-serif italic font-normal text-white block text-3xl md:text-4xl">
              shipping real features fast.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A quick snapshot of professional and freelance roles where I delivered production-ready software.
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {experiences.map((item, idx) => (
            <div
              key={item.role}
              className="group glass rounded-2xl p-6 border border-border/60 hover:border-primary/60 transition-all duration-300 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 140}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">{item.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/60 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
