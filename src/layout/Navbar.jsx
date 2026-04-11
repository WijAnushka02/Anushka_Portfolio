import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#"
                    className="text-xl font-bold tracking-tight transition-colors hover:text-[#20b2a6]">
                    Anushka Dilinuwan Wijesinghe<span className="text-primary"> </span>
                </a>

                {/* Desktop Nav (Unchanged) */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass backdrop-blur-md border border-white/10 rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 rounded-full hover:text-white hover:brightness-125 hover:bg-white/10"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button size="sm">Contact Me</Button>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden p-2 text-foreground cursor-pointer z-[60]"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu - Row divided & Left Aligned */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-50 md:hidden animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col pt-24 px-8 h-full">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                                // border-b adds the row divider, text-left ensures left alignment
                                className="text-xl font-medium text-muted-foreground py-5 border-b border-white/10 hover:text-[#20b2a6] transition-colors w-full text-left"
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="mt-10">
                            <Button className="w-full" size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                                Contact Me
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}