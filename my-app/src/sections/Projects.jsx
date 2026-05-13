import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const baseUrl = ((import.meta.env.BASE_URL || "/").endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`);
const asset = (relPath) => `${baseUrl}${relPath}?v=20260126`;

const projects = [
  {
    title: "Payment Details Management App",
    description:
     " A secure and user-friendly Payment Details Management app built to track, organize, and manage transactions efficiently.",
    image: asset("projects/payment-details.svg"),
    tags: ["React", "ASP.net", "SQL Server","C#"],
    link: "https://www.linkedin.com/in/shenal-achintha-165022371",
    github: "https://github.com/shenalachintha",
    demo: null,
  },
  {
    title: "Movie Site",
    description:
     " A secure and user-friendly Movie Site built to browse, search, and discover movies efficiently.",
    image: asset("projects/movie-site.svg"),
    tags: ["React", "Api", "CSS"],
    link: "https://www.linkedin.com/in/shenal-achintha-165022371",
    github: "https://github.com/shenalachintha",
    demo: null,
  },
  {
    title: "Pizza Ordering App",
    description:
     " A user-friendly Pizza Ordering App designed to simplify building a pie, checkout, and tracking.",
    image: asset("projects/pizza-ordering.svg"),
    tags: ["React", "Real Time API", "CSS"],
    link: "https://www.linkedin.com/in/shenal-achintha-165022371",
    github: "https://github.com/shenalachintha",
    demo: null,
  },
  {
    title: "Region Management Api",
    description:
     " A RESTful Region Management API designed to create, update, and manage regional data efficiently and securely.",
    image: asset("projects/region-management.svg"),
    tags: ["Asp.net", "SQL Server", "C#"],
    link: "https://www.linkedin.com/in/shenal-achintha-165022371",
    github: "https://github.com/shenalachintha",
    demo: null,
  },
  {
    title: "E-Commerce Website",
    description:
     " A full-featured e-commerce site with product browsing, cart management, and checkout flows.",
    image: asset("projects/ecommerce-website.svg"),
    tags: ["React", "ASP.net", "SQL Server"],
    link: "https://github.com/shenalachintha/E-Commerce-Application.git",
    github: "https://github.com/shenalachintha/E-Commerce-Application.git",
    demo: null,
  },
  {
    title: "AI Chatbot",
    description:
     " An AI-powered chatbot web app with a clean UI and real-time responses.",
    image: asset("projects/ai-chatbot.svg"),
    tags: ["React", "ASP.net", "AI"],
    link: "https://github.com/shenalachintha/react-aspnet-ai-chatbot.git",
    github: "https://github.com/shenalachintha/react-aspnet-ai-chatbot.git",
    demo: null,
  },
  {
    title: "Scholarship Management System",
    description:
     " A management system for scholarships covering applications, reviews, and approvals.",
    image: asset("projects/scholarship-management.svg"),
    tags: ["ASP.net", "SQL Server", "C#"],
    link: "https://github.com/shenalachintha/Schcloarship-Management-System.git",
    github: "https://github.com/shenalachintha/Schcloarship-Management-System.git",
    demo: null,
  },
  
];
export const Projects = () => {
    return (
      <section id="projects" className="py-24 sm:py-28 md:py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                 {projects.map((project, idx) => (
                   <div
                     key={idx}
                     className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                     style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                   >
                     {/* Image */}
                     <div className="relative overflow-hidden aspect-video">
                       <img
                         src={project.image}
                         alt={project.title}
                           loading="lazy"
                           decoding="async"
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       <div
                         className="absolute inset-0 
                       bg-gradient-to-t from-card via-card/50
                        to-transparent opacity-60"
                       />
                       {/* Overlay Links */}
                       <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                           {project.demo ? (
                             <a
                               href={project.demo}
                               target="_blank"
                               rel="noreferrer"
                               className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                             >
                               <ArrowUpRight className="w-5 h-5" />
                             </a>
                           ) : (
                             <span className="px-3 py-1 rounded-full bg-surface text-xs font-semibold border border-border/60 text-muted-foreground">
                               Demo soon
                             </span>
                           )}
                         <a
                           href={project.github}
                           target="_blank"
                           rel="noreferrer"
                           className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                         >
                           <Github className="w-5 h-5" />
                         </a>
                       </div>
                     </div>
       
                     {/* Content */}
                     <div className="p-5 sm:p-6 space-y-4">
                       <div className="flex items-start justify-between">
                         <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                           {project.title}
                         </h3>
                         <ArrowUpRight
                           className="w-5 h-5 
                         text-muted-foreground group-hover:text-primary
                          group-hover:translate-x-1 
                          group-hover:-translate-y-1 transition-all"
                         />
                       </div>
                       <p className="text-muted-foreground text-sm">
                         {project.description}
                       </p>
                       <div className="flex flex-wrap gap-2">
                         {project.tags.map((tag, tagIdx) => (
                           <span
                             key={tagIdx}
                             className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                           >
                             {tag}
                           </span>
                         ))}
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
       
               {/* View All CTA */}
               <div className="text-center mt-12 animate-fade-in animation-delay-500">
                 <AnimatedBorderButton
                   as="a"
                   href="https://github.com/shenalachintha"
                   target="_blank"
                   rel="noreferrer"
                 >
                   View All Projects
                   <ArrowUpRight className="w-5 h-5" />
                 </AnimatedBorderButton>
               </div>
      </div>
           </section>
         );
       };
