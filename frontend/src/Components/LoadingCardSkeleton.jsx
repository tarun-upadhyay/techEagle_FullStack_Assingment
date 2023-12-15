import React from "react";

const LoadingCardSkeleton = () => {
  return (
    <div className="flex items-center p-4 border border-gray-300 rounded-md mb-4">
      <div className="w-20 h-20 rounded-full bg-gray-300 mr-4"></div>
      <div className="flex-1">
        <div className="h-4 bg-gray-300 mb-2 rounded-lg"></div>
        <div className="h-3 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default LoadingCardSkeleton;
