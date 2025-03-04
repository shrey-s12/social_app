import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostList = ({ openModal }) => {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="max-w-8xl mx-auto mt-6 p-4">
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg italic">No posts yet. Create one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} openModal={openModal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
