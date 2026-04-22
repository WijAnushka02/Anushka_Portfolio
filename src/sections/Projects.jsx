import React from 'react';

// --- 1. PROJECT DATA ---
const projects = [
    {
        title: "Pharmacy Web Application Project",
        description:
            "A comprehensive Pharmacy Web Application designed to digitalise and streamline pharmaceutical services. Provides role-based access for managing prescriptions, inventory, and administrative operations.",
        image: "/projects/project1.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
        link: "#",
        github: "https://github.com/WijAnushka02/PharmacyWebApplication.git",
    },
    {
        title: "University Event Mobile App",
        description:
            "Created as part of a design challenge for SENG 21263. This mobile application helps students and alumni explore university events with an intuitive interface.",
        image: "/projects/project2.png",
        tags: ["Figma"],
        link: "https://www.figma.com/file/sMylPqGQJentXDdrKjZMy5/UoK_Events",
        github: "#",
    },
    {
        title: "Grocery Stock & Billing System",
        description:
            "A desktop-based management system for 'Super Sales' grocery store. Supports inventory tracking and automated billing using C# and MS SQL Server.",
        image: "/projects/project3.png",
        tags: ["C#", "MS SQL Server"],
        link: "#",
        github: "https://github.com/WijAnushka02/Super-Sales-Grocery-Store.git",
    },
    {
        title: "Iris Flower Classification",
        description:
            "A machine learning model built with Python to classify iris species based on physical characteristics. My first dive into Data Science.",
        image: "/projects/project4.png",
        tags: ["Python", "Scikit-learn", "Pandas"],
        link: "#",
        github: "https://github.com/WijAnushka02/MyFirstMLProject.git",
    },
];

// --- 2. INTERNAL COMPONENTS ---
const ArrowUpRight = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
);

const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

// --- 3. MAIN COMPONENT ---
export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-[var(--color-projects-bg)] text-foreground">
            {/* Section divider */}
            <div className="section-divider w-full absolute top-0" />

            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-accent-blue)]/8 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-8 h-px bg-primary" />
                        <span className="text-primary text-sm font-medium tracking-widest uppercase">
                            Featured Works
                        </span>
                        <span className="w-8 h-px bg-primary" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mt-2 mb-6 tracking-tight">
                        Projects that
                        <span className="font-serif italic font-normal text-muted-foreground">
                            {" "}make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        A selection of my recent work as a Software Engineering student, 
                        bridging the gap between complex logic and clean design.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-[var(--color-projects-card-bg)] border border-[var(--color-tag-border)] rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(34,197,94,0.08)] animate-fade-in"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            {/* Project number */}
                            <div className="absolute top-6 right-6 z-20 text-7xl font-black text-foreground/[0.03] group-hover:text-primary/10 transition-colors duration-500 select-none font-outfit">
                                {String(idx + 1).padStart(2, '0')}
                            </div>

                            {/* Image Wrapper */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                                />
                                {/* Dark overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-6">
                                    {project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300">
                                            <GithubIcon className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noreferrer" className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 pr-4">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>
                                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-3 py-1.5 rounded-full bg-[var(--color-tag-bg)] border border-[var(--color-tag-border)] text-xs font-medium text-[var(--color-tag-text)] group-hover:border-primary/30 group-hover:text-primary transition-all duration-300"
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
                <div className="text-center mt-20">
                    <a href="https://github.com/WijAnushka02" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass border border-[var(--color-social-border)] text-foreground hover:border-primary hover:text-primary hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300 group">
                        View All Projects
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;