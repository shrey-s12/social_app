import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost } from "../slices/postSlice";
import { useNavigate } from "react-router-dom";

const PostForm = ({ post = {} }) => {
    const [text, setText] = useState(post.text || "");
    const [image, setImage] = useState(post.image || "");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (post.id) {
            dispatch(editPost({ id: post.id, text, image }));
        } else {
            dispatch(addPost({ id: Date.now(), text, image }));
        }
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-md">
            <textarea
                className="w-full border p-2 rounded-md mb-2"
                placeholder="What's on your mind?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <input
                type="text"
                className="w-full border p-2 rounded-md mb-2"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
                {post.id ? "Update Post" : "Create Post"}
            </button>
        </form>
    );
};

export default PostForm;
