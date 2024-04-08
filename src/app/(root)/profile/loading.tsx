import { EventSkeletonCard, Skeleton } from "@/components/Components/Skeleton";

const loading = () => {
  return (
    <div className="wrapper">
      <div className="flex items-center justify-between">
        <Skeleton className="w-56 h-4" />
        <div className="animate-pulse block bg-gray-200 w-36 rounded h-10"></div>
      </div>

      <div className="flex flex-wrap gap-4 justify-between items-center my-8">
        {Array(3)
          .fill("skeleton")
          .map((skeleton, i) => (
            <EventSkeletonCard key={`${skeleton}-${i}`} />
          ))}
      </div>
    </div>
  );
};
export default loading;
