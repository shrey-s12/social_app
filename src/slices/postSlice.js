import { createSlice } from "@reduxjs/toolkit";

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
    },
    editPost: (state, action) => {
      const { id, text, image } = action.payload;
      const post = state.posts.find((post) => post.id === id);
      if (post) {
        post.text = text;
        post.image = image;
        localStorage.setItem("posts", JSON.stringify(state.posts));
      }
    },
  },
});

export const { addPost, editPost } = postSlice.actions;
export default postSlice.reducer;
