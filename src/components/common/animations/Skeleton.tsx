interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className = "", ...props }) => {
  const baseClasses = "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return <div className={combinedClasses} {...props} />;
};

export default Skeleton;
