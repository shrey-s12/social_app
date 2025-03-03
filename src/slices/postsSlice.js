import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: []
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        editPost: (state, action) => {
            const { id, image, title, content } = action.payload;
            const existingPost = state.posts.find(post => post.id === id);
            if (existingPost) {
                existingPost.image = image;
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        deletePost: (state, action) => {
            const { id } = action.payload;
            state.posts = state.posts.filter(post => post.id !== id);
        }
    }
});

export const { addPost, editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;