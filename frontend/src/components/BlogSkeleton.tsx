import { Cicle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div>
      <div role='status' className='animate-pulse'>
        <div className='pt-4 pb-1 w-screen max-w-screen-md cursor-pointer'>
          <div className='flex'>
            <div className='p-2'>
              <div className='h-2.5 bg-gray-200 rounded-full w-48 mb-4'></div>
              <div className=' h2 w-full mt-4'></div>
            </div>
            <div className='font-extralight pl-2 text-sm flex justify-center flex-col'>
              <div className='h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5'></div>
            </div>{" "}
            <div className='flex justify-center flex-col pl-2'>
              <Cicle />
            </div>
            <div className='pl-2 fint-thin text-slate-500 text-sm flex justify-center flex-col'>
              <div className='h-2 bg-gray-200 rounded-full mb-2.5'></div>
            </div>
          </div>
          <div className='text-xl font-semibold pl-2'>
            <div className='h-2 bg-gray-200 rounded-full max-w-[360px]'></div>
          </div>
          <div className='text-md font-thin pl-2'>
            <div className='h-2.5 bg-gray-200 rounded-full w-48 mb-4'></div>
          </div>
          <div className='text-slate-400 text-xs font-thin pl-2 pt-4'>
            <div className='h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5'></div>
          </div>
          <div className='bg-slate-200 h-0.5 w-full mt-4'></div>
        </div>

        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};
