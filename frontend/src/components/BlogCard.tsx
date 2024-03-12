import { Link } from "react-router-dom";

interface BlogCardType {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id,
}: BlogCardType) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className='pt-4 pb-1 w-screen max-w-screen-md cursor-pointer'>
        <div className='flex'>
          <div className='p-2'>
            <Avatar name={authorName} />{" "}
          </div>
          <div className='font-extralight pl-2 text-sm flex justify-center flex-col'>
            {authorName}{" "}
          </div>{" "}
          <div className='flex justify-center flex-col pl-2'>
            <Cicle />
          </div>
          <div className='pl-2 fint-thin text-slate-500 text-sm flex justify-center flex-col'>
            {publishedDate}
          </div>
        </div>
        <div className='text-xl font-semibold pl-2'>{title}</div>
        <div className='text-md font-thin pl-2'>
          {content.slice(0, 100) + "..."}
        </div>
        <div className='text-slate-400 text-xs font-thin pl-2 pt-4'>{`${Math.ceil(
          content.length / 100
        )} minute(s) read`}</div>
        <div className='bg-slate-200 h-0.5 w-full mt-4'></div>
      </div>
    </Link>
  );
};

export function Cicle() {
  return <div className='h-1 w-1 rounded-full bg-slate-500 '></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${
        size === "small" ? "w-4 h-4" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-xs text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
