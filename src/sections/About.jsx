import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
        icon: Code2,
        title: "Clean Code",
        description:
            "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[var(--color-accent-blue)]/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Section divider at top */}
            <div className="section-divider w-full absolute top-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
                                <span className="w-8 h-px bg-primary" />
                                <span className="text-primary">About Me</span>
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                            <span className="gradient-text">Building the future,</span>
                            <span className="font-serif italic font-normal text-foreground">
                                {" "}
                                one component at a time.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
                            <p>
                                I'm a passionate software engineer with over 5 years of
                                experience crafting digital products that make a difference. My
                                journey started with a curiosity for how things work on the web,
                                and it has evolved into a deep expertise in modern frontend
                                technologies.
                            </p>
                            <p>
                                I specialize in React, Next.js, and TypeScript, building
                                everything from sleek landing pages to complex enterprise
                                applications. My approach combines technical excellence with a
                                keen eye for design and user experience.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with
                                the developer community.
                            </p>
                        </div>

                        {/* Quote card with gradient left border */}
                        <div className="relative glass rounded-2xl p-6 animate-fade-in animation-delay-300 overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-[var(--color-accent-blue)] to-primary rounded-full" />
                            <p className="text-lg font-medium italic text-foreground pl-4">
                                "My mission is to create digital experiences that are not just
                                functional, but truly delightful — products that users love to
                                use and developers love to maintain."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass-card p-6 rounded-2xl animate-fade-in group"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

  