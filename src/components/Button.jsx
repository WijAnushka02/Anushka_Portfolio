import React from "react";

export const Button = ({
  className = "",
  size = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-semibold transition-all duration-300 " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
    "bg-primary text-primary-foreground " + 
    "hover:brightness-110 " + 
    "hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] " + 
    "active:scale-95 cursor-pointer";

  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
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