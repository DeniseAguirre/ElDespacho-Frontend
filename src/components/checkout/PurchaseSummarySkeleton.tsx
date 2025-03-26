import Skeleton from "../common/animations/Skeleton";

const PurchaseSummarySkeleton: React.FC = () => (
  <div className="p-4 sm:px-6 lg:px-8 lg:py-12">
    <div className="max-w-xl mx-auto p-8 transition-all duration-300">
      <Skeleton className="h-8 w-3/4 mb-8" />
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-24 w-full mb-4" />
      ))}
      <Skeleton className="h-32 w-full" />
    </div>
  </div>
);

export default PurchaseSummarySkeleton;
