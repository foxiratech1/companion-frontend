import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of a single Post
interface Post {
  id: number;
  image: string;
  mainDescription: string;
  location: string;
  rating: number;
  additionalImages: string;
  date: string;
  name: string;
  secondDescription: string;
  thirdDescription: string;
  title: string;
}

// Define the structure of the parameters for the API request
interface FetchPostsParams {
  persontype?: string;
  mostview?: boolean;
  newAds?: boolean;
  country?: string;
  page: number;
  limit?: number;
}

// Define the structure of the slice state
interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Create an asynchronous thunk to fetch posts
export const fetchPosts = createAsyncThunk<Post[], FetchPostsParams>(
  'posts/fetchPosts',
  async (params) => {
    const { persontype, mostview, newAds, country, page, limit } = params;
    
    // Construct the query parameters dynamically
    let queryParams = `?page=${page || 0}`;
    
    if (limit !== undefined) queryParams += `&limit=${limit}`;
    if (mostview !== undefined) queryParams += `&mostview=${mostview}`;
    if (persontype) queryParams += `&persontype=${persontype}`;
    if (newAds !== undefined) queryParams += `&newAds=${newAds}`;
    if (country) queryParams += `&country=${country}`;

    const POSTS_API_URL = `http://localhost:3000/api/vendor/ads-list${queryParams}`;
    console.log('API URL:', POSTS_API_URL); // Debug the API URL

    const response = await fetch(POSTS_API_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    
    // If there is additional logging for specific parameters, you can handle them here
    if (persontype) {
      console.log('Specific Person Type:', persontype);
    }

    console.log('Full response:', data); // Log the full response

    // Return the posts data
    if (data && data.data) {
      console.log('Posts:', data.data);
      return data.data; // Adjust this depending on your API structure
    } else {
      throw new Error('No posts found');
    }
  }
);

// Create the posts slice
const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  } as PostsState, // Type the state here
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error';
      });
  },
});

// Export the reducer to be used in the store
export const postReducer = postsSlice.reducer;
