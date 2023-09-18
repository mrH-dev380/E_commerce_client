import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import productCategoryService from './productCategoryService'

export const resetState = createAction('Reset_all')

export const getAllCategory = createAsyncThunk(
  'productCategory/get-all-category',
  async (thunkAPI) => {
    try {
      return await productCategoryService.getAllCategory()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getAllBrand = createAsyncThunk(
  'productCategory/get-all-brand',
  async (thunkAPI) => {
    try {
      return await productCategoryService.getAllBrand()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  categories: [],
  brands: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
}

const productCategorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.categories = action.payload
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getAllBrand.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllBrand.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.brands = action.payload
      })
      .addCase(getAllBrand.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetState, () => initialState)
  },
})

export default productCategorySlice.reducer
