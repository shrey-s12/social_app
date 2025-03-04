import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md mb-4">
            <p className="text-lg">{post.text}</p>
            {post.image && <img src={post.image} alt="Post" className="mt-2 rounded-md w-full" />}
            <Link to={`/edit/${post.id}`} className="text-blue-600 mt-2 block">
                Edit Post
            </Link>
        </div>
    );
};

export default PostItem;
