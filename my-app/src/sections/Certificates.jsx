import { ArrowUpRight, BadgeCheck, Link2 } from "lucide-react";

const certificates = [
    {
        title: "Complete Intro to React,v9",
        issuer: "Frontend Masters • 2025",
        description:
            "Comprehensive React fundamentals including components, hooks, state management, and best practices for building modern web applications.",
        skills: ["React", "UI/UX", "Responsive Design"],
        credentialId: "a0109c7c23-hixpadIGiV",
        credentialUrl: "https://static.frontendmasters.com/ud/c/a0109c7c23/hixpadIGiV/complete-react-v9.pdf",
    },
    {
        title: "Introduction to Asp.net",
        issuer: "SimpliLearn • 2025",
        description:
            "Foundational knowledge of ASP.NET framework, including web application development, MVC architecture, and building dynamic websites.",
        skills: ["C#", "ASP.NET", "Web Development"],
        credentialId: "9316557",
        credentialUrl: "https://simpli.app.link/CWatDVXa0Xb",
    },
    {
        title: "Web-Design for Beginners",
        issuer: "University of Moratuwa • 2025",
        description:
            "Introduction to web design principles, including layout, typography, and user experience.",
        skills: ["HTML", "CSS", "JavaScript"],
        credentialUrl: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
    },
    {
        title: "React Js for Beginners",
        issuer: "SimpliLearn • 2025",
        description:
            "Introduction to React.js, including components, props, state, and hooks.",
        skills: ["React", "JavaScript", "UI/UX"],
        credentialId: "9231671",
        credentialUrl: "https://simpli-web.app.link/e/FBzQOssgKXb",
    },
];

export const Certificates = () => {
    return (
        <section id="certificates" className="py-24 sm:py-28 relative overflow-hidden">
            <div className="absolute top-10 left-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-14">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Certifications
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Proof of continuous learning
                        <span className="font-serif italic font-normal text-white block text-2xl sm:text-3xl md:text-4xl">
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
                            className="group glass rounded-2xl p-5 sm:p-6 border border-border/60 hover:border-primary/60 transition-all duration-300 relative overflow-hidden animate-fade-in"
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