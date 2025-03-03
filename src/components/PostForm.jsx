import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { addPost } from '../slices/postsSlice';
import { useDispatch } from 'react-redux';

const PostForm = () => {
    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (image.trim() === "" || title.trim() === "" || content.trim() === "") {
            return;
        }

        const newPost = {
            id: uuidv4(),
            image,
            title,
            content
        };
        dispatch(addPost(newPost));
        setImage("");
        setTitle("");
        setContent("");
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded-md flex flex-col gap-3">
            <input
                type="url"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="p-2 border rounded-md"
            />
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border rounded-md"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="p-2 border rounded-md"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
            >
                Add Post
            </button>
        </form>
    )
}

export default PostForm