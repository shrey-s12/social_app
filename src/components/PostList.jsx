import { useSelector } from "react-redux";
import PostItem from "./PostItem";

const PostList = () => {
    const posts = useSelector((state) => state.posts.posts);

    return (
        <div className="max-w-lg mx-auto mt-6">
            {posts.length === 0 ? (
                <p className="text-center text-gray-600">No posts yet. Create one!</p>
            ) : (
                posts.map((post) => <PostItem key={post.id} post={post} />)
            )}
        </div>
    );
};

export default PostList;
