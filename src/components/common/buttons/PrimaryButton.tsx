import Link from "next/link";
import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <Link
      href={href}
      className={`btn px-6 py-3 shadow-sm bg-primary hover:bg-primary-dark ${className}`}
    >
      {children}
    </Link>
  );
};

export default PrimaryButton;
