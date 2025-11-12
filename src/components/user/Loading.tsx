import { Skeleton } from '../ui/skeleton';

const Loading = () => {
  return (
    <div>
      <Skeleton className="h-[210px] w-full lg:w-1/2 mb-8 rounded-xl" />
      <div className="grid grid-cols-1, md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
        <Skeleton className="h-[82px] rounded-xl" />
        <Skeleton className="h-[82px] rounded-xl" />
        <Skeleton className="h-[82px] rounded-xl" />
        <Skeleton className="h-[82px] rounded-xl" />
      </div>
    </div>
  );
};
export default Loading;
