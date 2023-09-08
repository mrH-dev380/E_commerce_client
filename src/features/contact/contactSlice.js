import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import contactService from './contactService'

export const postQuery = createAsyncThunk(
  'contact/post',
  async (data, thunkAPI) => {
    try {
      return await contactService.postQuery(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  contact: '',
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postQuery.pending, (state) => {
        state.isLoading = true
      })
      .addCase(postQuery.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.contact = action.payload
      })
      .addCase(postQuery.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
  },
})

export default contactSlice.reducer
