"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  target?: string;
  rel?: string;
  download?: boolean | string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  isLoading = false,
  disabled = false,
  icon,
  iconPosition = "right",
  target,
  rel,
  download,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none select-none relative overflow-hidden group cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-neon-primary hover:shadow-lg hover:shadow-primary/40 hover:brightness-110 active:scale-[0.98]",
    secondary:
      "bg-white/[0.08] text-white border border-white/[0.14] hover:bg-white/[0.14] hover:border-white/[0.25] backdrop-blur-md active:scale-[0.98]",
    ghost:
      "text-muted hover:text-white hover:bg-white/[0.06] active:scale-[0.98]",
    outline:
      "bg-transparent text-white border border-primary/40 hover:border-primary hover:bg-primary/10 active:scale-[0.98]",
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin mr-2" />
      ) : icon && iconPosition === "left" ? (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      ) : null}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || download || target === "_blank") {
      return (
        <a
          href={href}
          onClick={onClick}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : rel}
          download={download}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
