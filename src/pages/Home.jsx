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
        <div className="min-h-screen bg-gradient-to-r from-blue-300 to-blue-200">
            <header className="bg-blue-500 text-white text-center py-4 shadow-md">
                <h2 className="text-3xl font-bold">Social Feed</h2>
            </header>

            <div className=" mt-6 p-4">
                <button
                    onClick={() => openModal()}
                    className="fixed top-20 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
                >
                    ➕ Create Post
                </button>

                <PostList openModal={openModal} />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <PostForm post={selectedPost} onClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    );

};

export default Home;
