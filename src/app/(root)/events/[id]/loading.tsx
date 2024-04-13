import { ImageSkeleton, Skeleton } from "@/components/Components/Skeleton";

const loading = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <ImageSkeleton className="sm:w-full min-h-48 h-full " />
        <div className="space-y-4 mt-6 px-5 md:px-10">
          <Skeleton className="h-4" />
          <div className="flex items-center gap-4">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-8" />
          </div>
          <Skeleton className="h-8 w-20 rounded" />
          <Skeleton />
          <Skeleton />
          <div>
            <Skeleton className="h-3" />
            <Skeleton className="h-2 w-[70%]" />
            <Skeleton className="h-2 w-[70%]" />
            <Skeleton className="h-2 w-[70%]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default loading;
