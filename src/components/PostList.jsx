import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editPost, deletePost } from '../slices/postsSlice';

const PostList = () => {
    const posts = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();

    const handleEdit = (id) => () => {
        const image = prompt("Enter image URL");
        const title = prompt("Enter title");
        const content = prompt("Enter content");

        dispatch(editPost({ id, image, title, content }));
    }

    const handleDelete = (id) => () => {
        dispatch(deletePost({ id }));
    }

    return (
        <div className="p-4 space-y-4">
            {posts.map(post => (
                <div key={post.id} className="border p-4 rounded-md">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md" />
                    <h1 className="text-xl font-bold mt-2">{post.title}</h1>
                    <p className="mt-2">{post.content}</p>
                    <div>
                        <button
                            onClick={handleEdit(post.id)}
                            className="bg-blue-500 text-white p-2 rounded-md mt-2">
                            Edit
                        </button>

                        <button
                            onClick={handleDelete(post.id)}
                            className="bg-red-500 text-white p-2 rounded-md mt-2"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostList