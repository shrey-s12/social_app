import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
  const storedPosts = localStorage.getItem("posts");
  return storedPosts ? JSON.parse(storedPosts) : [];
});

const initialState = {
  posts: [],
  isLoading: false,
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
        localStorage.setItem("posts", JSON.stringify(state.posts)); // Update localStorage
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
      })
      .addCase(loadPosts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addPost, editPost } = postSlice.actions;
export default postSlice.reducer;
