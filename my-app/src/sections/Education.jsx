import { BookOpen, CalendarDays, GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Sc. (Hons) in Computer Science",
    school: "Undergraduate Program • Expected 2026",
    location: "Hybrid learning with on-campus collaboration",
    period: "2023 — Present",
    focus:
      "Deepening skills in software engineering, full-stack web development, and systems thinking.",
    highlights: [
      "Building projects with React, Node.js, and Express",
      "Coursework in algorithms, data structures, and databases",
      "Team-based sprints practicing agile workflows and code reviews",
    ],
  },
  {
    degree: "Foundation in Computing & Mathematics",
    school: "STEM-focused studies",
    location: "Blended classroom and self-driven practice",
    period: "2021 — 2023",
    focus:
      "Strengthening problem-solving with mathematics, physics, and programming fundamentals.",
    highlights: [
      "Explored web fundamentals with HTML, CSS, and JavaScript",
      "Solved logic challenges and algorithmic exercises to build rigor",
      "Built small personal projects to connect theory with practice",
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="absolute top-16 left-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-6 w-56 h-56 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-14">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Structured learning path
            <span className="font-serif italic font-normal text-white block text-3xl md:text-4xl">
              focused on building products that work.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A snapshot of formal studies and foundational learning that shape how I design, build, and iterate on software.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 border-l border-border/60" aria-hidden />

          <div className="space-y-10">
            {education.map((item, idx) => (
              <div
                key={item.degree}
                className="relative pl-12 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 140}ms` }}
              >
                <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-primary timeline-glow" />

                <div className="glass rounded-2xl p-6 border border-border/60 hover:border-primary/60 transition-all duration-300">
                  <div className="flex flex-wrap items-start gap-4 justify-between">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        <GraduationCap className="w-4 h-4" />
                        {item.degree}
                      </div>
                      <p className="text-lg font-semibold text-foreground">{item.school}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-surface px-3 py-1 rounded-full border border-border/60">
                      <CalendarDays className="w-4 h-4" />
                      {item.period}
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground flex items-start gap-2">
                    <BookOpen className="w-5 h-5 mt-0.5 text-primary" />
                    <span>{item.focus}</span>
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/60 text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
