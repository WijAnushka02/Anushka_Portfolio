const navLinks = [
    {href: "#about", label:"About"},
    {href: "#projects", label:"Projects"},
    {href: "#experience", label:"Experience"},
    {href: "#testamonials", label:"Testamonials"},
    {href: "#contact", label:"Contact"},
]


export const Navbar = () => {
    return <header>
       <nav>
        <a>
            PM<span>.</span>
        </a>

        {/* Desktop Nav */}
        <div>
            <div>
                {navLinks.map((link, index)=>(
                    <a href={link.href} key={index}>
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
        </nav> 
    </header>
}