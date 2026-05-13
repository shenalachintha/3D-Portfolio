import { Button } from "@/components/Button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get("name") || "";
        const email = form.get("email") || "";
        const subjectInput = form.get("subject") || "";
        const message = form.get("message") || "";
        const subject = encodeURIComponent(
            subjectInput || `Portfolio inquiry from ${name || "visitor"}`
        );
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:shenalachintha6@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 sm:py-28 md:py-32 relative overflow-hidden">
            <div className="absolute top-8 left-12 w-52 h-52 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-12 right-10 w-60 h-60 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-14">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Contact
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Let&apos;s build something
                        <span className="font-serif italic font-normal text-white block text-2xl sm:text-3xl md:text-4xl">
                            great together.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Tell me about your project, internship opportunity, or idea. I aim to respond within one business day.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="glass rounded-2xl p-6 sm:p-8 border border-border/60 space-y-6 animate-fade-in">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Email</p>
                                <a
                                    href="mailto:shenalachintha6@gmail.com"
                                    className="text-lg font-semibold text-foreground hover:text-primary"
                                >
                                                                    shenalachintha6@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Phone</p>
                                <p className="text-lg font-semibold text-foreground">+94710557806</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Location</p>
                                <p className="text-lg font-semibold text-foreground">Colombo • Open to remote</p>
                            </div>
                        </div>

                        <div className="glass rounded-xl p-5 border border-border/60">
                            <p className="text-sm text-muted-foreground">
                                Prefer email? Tap the button to launch your email client with the details prefilled.
                            </p>
                            <div className="mt-4">
                                <Button
                                    size="sm"
                                    className="w-full md:w-auto"
                                    onClick={() => {
                                        window.location.href = "mailto:shenalachintha6@gmail.com?subject=Let%27s%20collaborate";
                                    }}
                                >
                                    Email me directly
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="glass rounded-2xl p-6 sm:p-8 border border-border/60 space-y-6 animate-fade-in"
                        style={{ animationDelay: "150ms" }}
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="contact-name" className="text-sm text-muted-foreground">
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    autoComplete="name"
                                    className="w-full rounded-xl bg-surface border border-border/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contact-email" className="text-sm text-muted-foreground">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    className="w-full rounded-xl bg-surface border border-border/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="contact-subject" className="text-sm text-muted-foreground">
                                Subject
                            </label>
                            <input
                                id="contact-subject"
                                name="subject"
                                type="text"
                                placeholder="What would you like to build?"
                                autoComplete="off"
                                className="w-full rounded-xl bg-surface border border-border/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="contact-message" className="text-sm text-muted-foreground">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={5}
                                placeholder="Share a brief about your idea, scope, and timeline."
                                autoComplete="off"
                                className="w-full rounded-xl bg-surface border border-border/60 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <p className="text-sm text-muted-foreground">
                                I usually reply within one business day.
                            </p>
                            <Button type="submit" className="flex items-center gap-2">
                                Send message
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};