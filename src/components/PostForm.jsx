import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost } from "../slices/postSlice";

const PostForm = ({ post, onClose }) => {
    const dispatch = useDispatch();

    const [text, setText] = useState(post?.text || "");
    const [image, setImage] = useState(post?.image || "");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (post) {
            dispatch(editPost({ id: post.id, text, image }));
        } else {
            dispatch(addPost({ id: Date.now(), text, image }));
        }

        onClose();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <textarea
                className="w-full border p-2 rounded-md"
                placeholder="What's on your mind?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <input
                type="text"
                className="w-full border p-2 rounded-md"
                placeholder="Image URL (optional)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
                {post ? "Update Post" : "Create Post"}
            </button>
        </form>
    );
};

export default PostForm;
