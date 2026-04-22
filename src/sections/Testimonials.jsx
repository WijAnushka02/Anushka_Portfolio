import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Samantha Perera",
        role: "Senior Lecturer — University of Kelaniya",
        quote: "Anushka demonstrates exceptional dedication to software engineering. His ability to grasp complex concepts quickly and apply them is truly impressive.",
        initials: "SP",
    },
    {
        name: "Kasun Fernando",
        role: "Project Team Lead",
        quote: "Working with Anushka on the Pharmacy Web Application was great. His full-stack skills and attention to detail ensured we delivered a polished product.",
        initials: "KF",
    },
    {
        name: "Nishadi Silva",
        role: "UI/UX Design Collaborator",
        quote: "Anushka has a rare blend of design sensibility and technical skill. He translated complex user flows into intuitive, elegant interfaces effortlessly.",
        initials: "NS",
    },
    {
        name: "Ravindu Jayasekara",
        role: "Fellow Engineering Student",
        quote: "Anushka brings a positive attitude, deep knowledge of modern web frameworks, and an eagerness to learn. His ML project was especially inspiring.",
        initials: "RJ",
    },
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-32 relative overflow-hidden bg-[var(--color-projects-bg)]">
            <div className="section-divider w-full absolute top-0" />
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-8 h-px bg-primary" />
                        <span className="text-primary text-sm font-medium tracking-widest uppercase">Testimonials</span>
                        <span className="w-8 h-px bg-primary" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6 tracking-tight">
                        What people{" "}
                        <span className="font-serif italic font-normal text-muted-foreground">say about me.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="glass-card rounded-2xl p-8 relative animate-fade-in group" style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                                <Quote className="w-12 h-12 text-primary" />
                            </div>
                            <p className="text-muted-foreground leading-relaxed mb-6 italic">"{item.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-[var(--color-accent-blue)]/30 flex items-center justify-center border border-primary/20">
                                    <span className="text-sm font-bold text-primary">{item.initials}</span>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold">{item.name}</h4>
                                    <p className="text-xs text-muted-foreground">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};