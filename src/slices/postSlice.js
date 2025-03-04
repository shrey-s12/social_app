import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const getInitialPosts = () => {
  const storedPosts = localStorage.getItem("posts");
  return storedPosts ? JSON.parse(storedPosts) : [];
};

const initialState = {
  posts: getInitialPosts(),
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
      toast.success("Post added successfully! 🎉");
    },
    editPost: (state, action) => {
      const { id, text, image } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.text = text;
        post.image = image;
        localStorage.setItem("posts", JSON.stringify(state.posts));
        toast.info("Post updated successfully! ✏️");
      }
    },
    deletePost: (state, action) => {
      const { id } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
      localStorage.setItem("posts", JSON.stringify(state.posts));
      toast.error("Post deleted! 🗑");
    },
  },
});

export const { addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
