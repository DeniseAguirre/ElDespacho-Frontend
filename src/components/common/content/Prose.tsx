import React from "react";

interface ProseProps {
  html: string;
  className?: string;
}

const Prose: React.FC<ProseProps> = ({ html, className }) => {
  const baseStyles = "text-lg font-medium";
  const combinedClassName = `${baseStyles} ${className}`;

  return (
    <div
      className={combinedClassName}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
