import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import colorService from './colorService'

export const resetState = createAction('Reset_all')

export const getAllColor = createAsyncThunk(
  'color/get-all-color', // action name
  async (thunkAPI) => {
    try {
      return await colorService.getAllColor()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  colors: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

const colorSlice = createSlice({
  name: 'color',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllColor.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllColor.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        state.colors = action.payload
      })
      .addCase(getAllColor.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(resetState, () => initialState)
  },
})

export default colorSlice.reducer
