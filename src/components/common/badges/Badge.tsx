import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error";
  size?: "sm" | "md" | "lg";
  className: string;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold";

  const variantStyles = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-400 text-black",
    error: "bg-red-500 text-white",
  };

  const sizeStyles = {
    sm: "p-1 text-xs",
    md: "p-1 text-sm",
    lg: "p-1 text-base",
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};

export default Badge;
