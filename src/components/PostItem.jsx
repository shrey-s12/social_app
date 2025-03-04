const PostItem = ({ post, openModal }) => {
    return (
        <div className="bg-white p-5 shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg font-semibold text-gray-800">{post.text}</p>

            {post.image && (
                <img
                    src={post.image}
                    alt="Post"
                    className="mt-3 rounded-lg w-full h-60 object-fill"
                />
            )}

            <button
                onClick={() => openModal(post)}
                className="mt-4 inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
            >
                ✏ Edit Post
            </button>
        </div>
    );
};

export default PostItem;
