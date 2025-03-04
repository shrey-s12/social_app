import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePost } from "../slices/postSlice";

const PostItem = ({ post, openModal }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deletePost({ id }));
    };

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    return (
        <div className="relative bg-white p-5 shadow-lg rounded-lg border border-gray-200">
            <h3
                className="text-xl font-bold text-gray-900 truncate"
                title={post.text} 
            >
                {truncateText(post.text, 10)}
            </h3>
            {post.image && (
                <div className="relative">
                    <img src={post.image} alt="Post" className="mt-3 rounded-lg w-full h-60 object-cover" />
                </div>
            )}
            <div className="flex items-end ">
                <button
                    onClick={() => openModal(post)}
                    className="absolute top-3 right-17 text-black border border-gray-500 hover:text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
                >
                    <FaPencilAlt size={23} />
                </button>
                <button
                    onClick={() => handleDelete(post.id)}
                    className="absolute top-3 right-5 text-black border border-gray-500 p-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition duration-300"
                >
                    <FaTrash size={23} />
                </button>
            </div>
        </div>

    );
};

export default PostItem;
