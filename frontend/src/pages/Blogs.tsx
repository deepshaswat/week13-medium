import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className='flex justify-center'>
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className='flex justify-center'>
        <div className='max-w-xl'>
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || "Annonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate='10th March 2024'
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
