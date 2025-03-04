import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const { id, text, image } = action.payload;
      const post = state.posts.find(post => post.id === id);
      if (post) {
        post.text = text;
        post.image = image;
      }
    }
  },
});

export const { addPost, editPost } = postSlice.actions;
export default postSlice.reducer;
