import React from "react";

export interface SectionHeaderProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  label?: React.ReactNode;
  align?: "center" | "left";
  as?: "h1" | "h2" | "h3";
  id?: string;
  dark?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Reusable SectionHeader component across all home page sections.
 */
export default function SectionHeader({
  title,
  description,
  label,
  align = "center",
  as = "h2",
  id,
  dark = false,
  className = "",
  children,
}: SectionHeaderProps) {
  const HeadingTag = as;
  const alignmentClass = align === "left" ? "is-left" : "is-center";
  const darkClass = dark ? "is-dark" : "";

  return (
    <header
      className={`section-header ${alignmentClass} ${darkClass} ${className}`.trim()}
    >
      {label && <span className="section-header-label">{label}</span>}
      {title && (
        <HeadingTag id={id} className="section-header-title">
          {title}
        </HeadingTag>
      )}
      {description && (
        <p className="section-header-description">{description}</p>
      )}
      {children}
    </header>
  );
}
