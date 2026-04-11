import React from "react";

export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-semibold transition-all duration-300 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20b2a6] " +
    "bg-[#20b2a6] text-white " + 
    "hover:brightness-110 " + 
    "hover:shadow-[0_0_20px_rgba(32,178,166,0.6)] " + 
    "active:scale-95";

  const sizeClasses = {
    sm: "px-4 py-1.5 text-sm",
    default: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};