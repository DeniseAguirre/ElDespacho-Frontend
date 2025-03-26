import React from "react";
import { ReactNode } from "react";

interface TitleSectionProps {
  section: string;
  title?: string | ReactNode;
  className?: string;
  sectionClass?: string;
  titleClass?: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({
  section,
  title,
  className,
  sectionClass,
  titleClass,
}) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h5
        className={`section-title text-primary ff-secondary mb-2 ${sectionClass}`}
      >
        {section}
      </h5>
      <h1 className={`text-3xl md:text-4xl font-extrabold mb-4 ${titleClass}`}>
        {title}
      </h1>
    </div>
  );
};

export default TitleSection;
