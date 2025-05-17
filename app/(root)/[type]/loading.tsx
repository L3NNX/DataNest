import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  // Mock data for skeleton UI
  const mockFiles = Array(12).fill(1);

  return (
    <div className="page-container">
      <section className="w-full">
        {/* Page title skeleton */}
        <Skeleton className="h-10 w-48" />
        
        <div className="total-size-section">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-16" /> {/* Total: */}
            <Skeleton className="h-6 w-24" /> {/* Size value */}
          </div>
          <div className="sort-container">
            <Skeleton className="body-1 hidden h-6 w-16 text-light-200 sm:block" /> {/* Sort by: */}
            <Skeleton className="h-10 w-32" /> {/* Sort dropdown */}
          </div>
        </div>
      </section>

      {/* File list skeleton */}
      <section className="file-list">
        {mockFiles.map((_, index) => (
          <div key={index} className="file-card">
            {/* File thumbnail skeleton */}
            <div className="file-card-thumbnail">
              <Skeleton className="h-full w-full rounded-lg" />
            </div>
            
            {/* File info skeleton */}
            <div className="file-card-info">
              <div className="flex w-full justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-3/4" /> {/* File name */}
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-16" /> {/* File size */}
                    <Skeleton className="h-4 w-24" /> {/* File date */}
                  </div>
                </div>
                <Skeleton className="h-8 w-8 rounded-full" /> {/* Action button */}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Loading;