import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogService from './blogService'

export const getAllBlog = createAsyncThunk(
  'blog/get-all-blog',
  async (thunkAPI) => {
    try {
      return await blogService.getAllBlog()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getMoreBlog = createAsyncThunk(
  'blog/get-more-blog',
  async (data, thunkAPI) => {
    try {
      return await blogService.getMoreBlog(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

const blogSlide = createSlice({
  name: 'blog',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.blogs = action.payload.articles
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(getMoreBlog.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getMoreBlog.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        const blogData = state.blogs.concat(action.payload.articles)
        state.blogs = blogData
      })
      .addCase(getMoreBlog.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
  },
})

export default blogSlide.reducer
