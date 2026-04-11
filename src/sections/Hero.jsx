


export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Hero image"
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
                            animation: `slow-drift ${15 + Math.random() * 20
                                }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-sm font-medium text-[#20b2a6]">
                                {/* The Dot Container */}
                                <span className="relative flex h-2 w-2">
                                    {/* The Ripple Effect */}
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#20b2a6] opacity-75"></span>
                                    {/* The Solid Center Dot */}
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#20b2a6]"></span>
                                </span>
                                Software Engineering Undergraduate • AI/ML Enthusiastic
                            </span>
                        </div>

                        {/*Headline*/}
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
                                Hi, I’m Anushka Dilinuwan Wijesinghe — a Software Engineering undergraduate and Full-Stack Developer. I build scalable web applications using React, Next.js, TypeScript, Node.js, and Spring Boot.
                                I’m also passionate about Data Science, working with Python, Pandas, NumPy, and Scikit-learn to develop data-driven solutions.

                            </p>
                        </div>
                    </div>
                    {/* Right Column - Profile Image */}
                </div>
            </div>


        </section>
    );
};