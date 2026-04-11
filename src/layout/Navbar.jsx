const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
]

export const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#"
                    className="text-xl font-bold tracking-tight transition-colors hover:text-primary">
                    Anushka Dilinuwan Wijesinghe<span className="text-primary">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {/* Added backdrop-blur and a subtle border to the glass effect */}
                    <div className="glass backdrop-blur-md border border-white/10 rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 rounded-full hover:text-white hover:brightness-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] hover:bg-white/10"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
                
            </nav>
        </header>
    );
}