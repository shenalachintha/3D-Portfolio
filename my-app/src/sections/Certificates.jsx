import { ArrowUpRight, BadgeCheck, Link2 } from "lucide-react";

const certificates = [
    {
        title: "Meta Front-End Developer",
        issuer: "Coursera • 2025",
        description:
            "Specialization focused on responsive UI, React fundamentals, and accessible design systems.",
        skills: ["React", "UI/UX", "Responsive Design"],
        credentialId: "META-FE-2025",
        credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/placeholder",
    },
    {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services • 2024",
        description:
            "Validated cloud fundamentals including architectures, security, and cost-optimized deployments.",
        skills: ["AWS", "Cloud", "Security Basics"],
        credentialId: "AWS-CLF-001",
        credentialUrl: "https://aws.amazon.com/verification",
    },
    {
        title: "SQL for Data Science",
        issuer: "Coursera • 2024",
        description:
            "Practical SQL for querying, cleaning, and aggregating data across relational datasets.",
        skills: ["SQL", "Data Modeling", "Analytics"],
        credentialId: "SQL-DS-2024",
        credentialUrl: "https://www.coursera.org/account/accomplishments/placeholder",
    },
];

export const Certificates = () => {
    return (
        <section id="certificates" className="py-28 relative overflow-hidden">
            <div className="absolute top-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-14">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Certifications
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Proof of continuous learning
                        <span className="font-serif italic font-normal text-white block text-3xl md:text-4xl">
                            and industry-ready skills.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A curated list of completed programs demonstrating hands-on practice, assessments, and applied projects.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {certificates.map((cert, idx) => (
                        <div
                            key={cert.title}
                            className="group glass rounded-2xl p-6 border border-border/60 hover:border-primary/60 transition-all duration-300 relative overflow-hidden animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                        <BadgeCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {cert.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/60 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="text-xs glass px-3 py-1 rounded-full text-muted-foreground border border-border/60">
                                        ID: {cert.credentialId}
                                    </span>
                                    <a
                                        href={cert.credentialUrl}
                                        className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
                                    >
                                        View credential
                                        <Link2 className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <a
                        href="mailto:shenalachintha6@gmail.com"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                        Need proof of completion? Request it here
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};