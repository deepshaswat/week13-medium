import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl'>
        <div className='col-span-8'>
          <div className='text-5xl font-extrabold'>{blog.title}</div>
          <div className='text-slate-400 pt-2'>Posted on 2nd December 2023</div>
          <div className='pt-4'>{blog.content}</div>
        </div>
        <div className='col-span-4'>
          <div className='text-lg text-slate-600'>Author</div>
          <div className='flex'>
            <div className='flex flex-col justify-center pr-4'>
              <Avatar size={"big"} name={blog.author.name || "Anonymous"} />
            </div>
            <div>
              <div className='text-xl font-bold'>
                {blog.author.name || "Anonymous"}
              </div>
              <div className='pt-2 text-slate-500'>
                Random catch phrase about the author to grab the attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
