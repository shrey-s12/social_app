import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Social App</h1>
            <div>
                <Link to="/" className="px-4">Home</Link>
                <Link to="/create" className="px-4">Create Post</Link>
            </div>
        </nav>
    );
};

export default Navbar;
