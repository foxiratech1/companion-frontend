// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './reducers/slices';


export const store = configureStore({
  reducer: {
    posts: postReducer
    // users: userReducer,
  },
});
