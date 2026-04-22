import { ArrowUp, Heart } from "lucide-react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-16 pb-8 overflow-hidden">
            {/* Top gradient divider */}
            <div className="section-divider w-full absolute top-0" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Back to top */}
                <div className="flex justify-center mb-12">
                    <a
                        href="#"
                        className="group p-3 rounded-full glass border border-[var(--color-social-border)] hover:border-primary hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                </div>

                {/* Footer content */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-outfit font-medium text-foreground">Anushka Wijesinghe</span>
                    </div>

                    <p className="flex items-center gap-1.5">
                        © {currentYear} — Built with
                        <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
                        using React & Tailwind CSS
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/WijAnushka02" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                        <a href="https://www.linkedin.com/in/anushka-wijesinghe-85445630a/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                        <a href="https://x.com/ADilinuwan75478" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">X</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
