import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

const Loading = () => {
  // Mock data for skeleton UI
  const mockSummaryItems = [1, 2, 3, 4];
  const mockRecentFiles = [1, 2, 3, 4, 5];

  return (
    <div className="dashboard-container">
      {/* Chart loading skeleton */}
      <section>
        <div className="flex flex-col items-center justify-center">
          <Skeleton className="h-64 w-64 rounded-full" />
        </div>

        {/* Uploaded file type summaries loading skeleton */}
        <ul className="dashboard-summary-list">
          {mockSummaryItems.map((item) => (
            <div key={item} className="dashboard-summary-card">
              <div className="space-y-4">
                <div className="flex justify-between gap-3">
                  <Skeleton className="h-12 w-12" />
                  <Skeleton className="h-6 w-20" />
                </div>
                <Skeleton className="h-5 w-3/4" />
                <Separator className="bg-light-400" />
                <Skeleton className="h-4 w-1/2 mx-auto" />
              </div>
            </div>
          ))}
        </ul>
      </section>

      {/* Recent files uploaded loading skeleton */}
      <section className="dashboard-recent-files">
        <h2 className="h3 xl:h2 text-light-100">Recent files uploaded</h2>
        <ul className="mt-5 flex flex-col gap-5">
          {mockRecentFiles.map((file) => (
            <div key={file} className="flex items-center gap-3">
              {/* Thumbnail skeleton */}
              <Skeleton className="h-12 w-12 rounded" />
              {/* File details skeleton */}
              <div className="recent-file-details w-full">
                <div className="flex flex-col gap-1 w-full">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Loading;