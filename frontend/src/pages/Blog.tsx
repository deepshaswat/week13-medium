import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading || !blog) {
    return (
      <div>
        <Appbar />
        <div className='h-screen flex flex-col justify-center'>
          <div className='flex justify-center'>
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div>
        <div>
          <FullBlog blog={blog} />
        </div>
      </div>
    </div>
  );
};
