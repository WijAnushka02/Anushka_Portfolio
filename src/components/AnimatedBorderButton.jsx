import { Download } from "lucide-react";

export const AnimatedBorderButton = () => {
  return (
    <button
      className="relative bg-transparent text-foreground group px-8 py-4 text-lg font-medium rounded-full overflow-visible transition-colors duration-300 hover:text-primary focus:outline-none cursor-pointer"
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>
      
      {/* Button Content */}
      <span className="relative flex items-center justify-center gap-2">
        <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
        Download CV
      </span>
    </button>
  );
};