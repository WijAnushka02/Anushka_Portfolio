import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "MySQL",
    "PostgreSQL", "MongoDB", "Python", "Docker", "C",
    "Java", "Tailwind CSS", "NumPy", "Pandas", "scikit-learn",
    "Figma", "Git", "GitHub Actions",
];

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white py-20">
            
            {/* 1. Background Layer */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black" />
            </div>

            {/* 2. Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-40"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 15}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* 3. Main Content Container */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

                    {/* Left Column: Text & CTAs */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-[#20b2a6]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20b2a6] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20b2a6]"></span>
                                </span>
                                Software Engineering Undergraduate • AI/ML Enthusiast
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Crafting{' '}
                                <span className="text-[#20b2a6] drop-shadow-[0_0_15px_rgba(32,178,166,0.5)]">
                                    Digital
                                </span>
                                <br />
                                Experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    Precision ...
                                </span>
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi 👋, I’m <span className="text-white font-semibold">Anushka Dilinuwan Wijesinghe.</span>
                                <br /><br />
                                Software Engineering undergraduate and Full-Stack Developer 💻.
                                <br />
                                I build scalable web applications using React, Next.js, TypeScript, and Spring Boot 🚀.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-6 animate-fade-in animation-delay-300">
                            <Button size="lg" className="group">
                                Contact Me
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <AnimatedBorderButton />
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-5 animate-fade-in animation-delay-400 pt-2">
                            <span className="text-sm font-semibold text-white/50 uppercase tracking-widest">Follow me:</span>
                            <div className="flex items-center gap-4">
                                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#20b2a6] hover:bg-[#20b2a6]/10 transition-all duration-300 group">
                                    <svg className="w-5 h-5 fill-white group-hover:fill-[#20b2a6]" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                </a>
                                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#20b2a6] hover:bg-[#20b2a6]/10 transition-all duration-300 group">
                                    <svg className="w-5 h-5 fill-white group-hover:fill-[#20b2a6]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                </a>
                                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-[#20b2a6] hover:bg-[#20b2a6]/10 transition-all duration-300 group">
                                    <svg className="w-5 h-5 fill-white group-hover:fill-[#20b2a6]" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        <div className="relative max-w-md mx-auto">
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#20b2a6]/30 via-transparent to-[#20b2a6]/10 blur-2xl animate-pulse" />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img
                                    src="/profile-photo (3).png"
                                    alt="Anushka Dilinuwan"
                                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                                />
                                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                    <div className="text-2xl font-bold text-[#20b2a6]">3+</div>
                                    <div className="text-xs text-muted-foreground text-center">Projects</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Skills Marquee Section */}
                <div className="mt-32 w-full animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground/60 mb-8 text-center uppercase tracking-[0.3em]">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
                        
                        <div className="flex animate-marquee whitespace-nowrap hover:[animation-play-state:paused] py-4">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 px-10">
                                    <span className="text-xl md:text-2xl font-bold text-white/20 hover:text-[#20b2a6] transition-all duration-300 cursor-default">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. Scroll Down Indicator (Moved inside container, relative positioning) */}
                <div className="mt-20 animate-fade-in animation-delay-800">
                    <a 
                        href="#about" 
                        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-[#20b2a6] transition-colors group"
                    >
                        <span className="text-[10px] uppercase tracking-[0.4em] font-semibold">Scroll Down</span>
                        <ChevronDown className="w-6 h-6 animate-bounce" />
                    </a>
                </div>
            </div>
        </section>
    );
};