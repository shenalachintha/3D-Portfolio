import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Express.js",
  ".NET Core",
  "C#",
  "Sql Server",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
];

const baseUrl = ((import.meta.env.BASE_URL || "/").endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`);
const cvUrl = `${baseUrl}mycv.pdf`;

export const Hero = () => {
  const handleContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Computer Science Undergraduate • Full-Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Building reliable
                <span className="text-primary glow-text"> full-stack web apps </span>
                that turn complex workflows into simple experiences.
                <span className="font-serif italic font-normal text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-4">
                  React • ASP.NET • Modern UI
                </span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I am a Computer Science undergraduate focused on full-stack
                development. I build scalable products with React, Node.js, and
                ASP.NET, and I am open to internships or junior roles in Sri
                Lanka or remote.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" onClick={handleContact}>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton as="a" href={cvUrl} download>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] sm:text-xs text-muted-foreground animate-fade-in animation-delay-400">
              <span className="px-3 py-1 rounded-full bg-surface border border-border/60">
                Open to internships
              </span>
              <span className="px-3 py-1 rounded-full bg-surface border border-border/60">
                Replies within 24 hours
              </span>
              <span className="px-3 py-1 rounded-full bg-surface border border-border/60">
                Based in Sri Lanka • Remote friendly
              </span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-in animation-delay-500">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/shenalachintha" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shenal-achintha-165022371" },
               
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={`Open ${social.icon.name} profile`}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
               <img
  src="/projects/myself.jpeg"
  alt="Shenal Achintha Profile"
  decoding="async"
  className="w-full aspect-[4/5] object-cover rounded-2xl"
/>  

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 sm:mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-base sm:text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};