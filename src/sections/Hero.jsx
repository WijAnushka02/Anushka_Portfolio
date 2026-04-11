import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"; // Assuming you saved the CV button here

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
            {/* Background Layer */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
            </div>

            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        {/* Live Status Badge */}
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium text-[#20b2a6]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20b2a6] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20b2a6]"></span>
                                </span>
                                Software Engineering Undergraduate • AI/ML Enthusiast
                            </span>
                        </div>

                        {/* Headline */}
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
                                I build scalable web applications using React, Next.js, TypeScript, Node.js, and Spring Boot 🚀. 
                                <br />
                                I’m also passionate about Data Science 📊, working with Python, Pandas, NumPy, and Scikit-learn to develop data-driven solutions.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-6 animate-fade-in animation-delay-300">
                            {/* Primary Button */}
                            <Button size="lg" className="group">
                                Contact Me 
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>

                            {/* Specialized Animated CV Button */}
                            <AnimatedBorderButton />
                        </div>
                    </div>

                    {/* Right Column - Profile Image Placeholder */}
                    <div className="relative hidden lg:flex justify-center items-center animate-fade-in animation-delay-400">
                    </div>
                </div>
            </div>
        </section>
    );
};