"use client";

export default function BlogSkeleton() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="w-full bg-gradient-to-r from-gray-100 to-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-12 skeleton-shimmer rounded-lg w-3/4 mb-6"></div>
          <div className="h-6 skeleton-shimmer rounded-lg w-1/2 mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-1">
                <div className="h-48 skeleton-shimmer rounded-lg mb-3"></div>
                <div className="h-4 skeleton-shimmer rounded w-full mb-2"></div>
                <div className="h-4 skeleton-shimmer rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              {/* Image Skeleton */}
              <div className="h-48 skeleton-shimmer"></div>
              
              {/* Content Skeleton */}
              <div className="p-6">
                <div className="h-5 skeleton-shimmer rounded w-1/3 mb-4"></div>
                <div className="h-6 skeleton-shimmer rounded w-full mb-3"></div>
                <div className="h-6 skeleton-shimmer rounded w-5/6 mb-3"></div>
                <div className="h-4 skeleton-shimmer rounded w-full mb-2"></div>
                <div className="h-4 skeleton-shimmer rounded w-full mb-2"></div>
                <div className="h-4 skeleton-shimmer rounded w-3/4 mb-4"></div>
                <div className="h-4 skeleton-shimmer rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies Skeleton */}
      <div className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 skeleton-shimmer rounded-lg w-1/3 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6">
                <div className="h-40 skeleton-shimmer rounded-lg mb-4"></div>
                <div className="h-5 skeleton-shimmer rounded w-2/3 mb-3"></div>
                <div className="h-4 skeleton-shimmer rounded w-full mb-2"></div>
                <div className="h-4 skeleton-shimmer rounded w-4/5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Section Skeleton */}
      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-6 skeleton-shimmer rounded-lg w-1/4 mx-auto mb-6"></div>
          <div className="flex justify-center gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-12 skeleton-shimmer rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="w-full bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-5 bg-gray-700 rounded w-1/2 mb-4 skeleton-shimmer"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded w-full skeleton-shimmer"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4 skeleton-shimmer"></div>
                  <div className="h-4 bg-gray-700 rounded w-5/6 skeleton-shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

