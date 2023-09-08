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

export const getBlogById = createAsyncThunk(
  'blog/get-blog',
  async (id, thunkAPI) => {
    try {
      return await blogService.getBlogById(id)
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
        state.blogs = action.payload
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(getBlogById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.blogTitle = action.payload.title
        state.blogDescription = action.payload.description
        state.blogCategoryName = action.payload.category
        state.blogImages = action.payload.images
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
  },
})

export default blogSlide.reducer
