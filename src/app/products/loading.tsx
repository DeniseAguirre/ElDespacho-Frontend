import Skeleton from "@/components/common/animations/Skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/common/cards/Card";
import React from "react";

const LoadingProductGrid: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="flex flex-col relative">
            <CardHeader>
              <Skeleton className="w-full h-48 rounded-t-md" />
            </CardHeader>
            <CardContent className="flex-grow">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-1" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t-2 border-grey-300">
              <div className="flex flex-col justify-center">
                <Skeleton className="h-4 w-16 mb-1" />
                <Skeleton className="h-6 w-24" />
              </div>
              <Skeleton className="h-10 w-24 rounded-md" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoadingProductGrid;
