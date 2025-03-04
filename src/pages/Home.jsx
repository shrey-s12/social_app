import { useState } from "react";
import Modal from "../components/Modal";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const openModal = (post = null) => {
        setSelectedPost(post);
        setIsModalOpen(true);
    };

    return (
        <div className="p-6">
            <h2 className="text-center text-2xl font-bold my-4">Home Feed</h2>
            <button
                onClick={() => openModal()}
                className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
                + Create Post
            </button>

            <PostList openModal={openModal} />

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <PostForm post={selectedPost} onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );
};

export default Home;
