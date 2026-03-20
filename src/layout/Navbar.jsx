const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
    return (
        <header style={{ width: '100%', background: '#f0f0f0', padding: '10px' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="/" style={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}>
                    PM<span style={{ color: 'red' }}>.</span>
                </a>

                {/* Desktop Nav */}
                <div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        {navLinks.map((link) => (
                            <a 
                                key={link.label} 
                                href={link.href} 
                                style={{ color: 'blue', textDecoration: 'none' }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav> 
        </header>
    );
};