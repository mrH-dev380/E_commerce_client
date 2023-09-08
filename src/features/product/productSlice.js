import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import productService from './productService'

export const resetState = createAction('single_product_reset')

export const getAllProduct = createAsyncThunk(
  'product/get-all-product',
  async (thunkAPI) => {
    try {
      return await productService.getAllProduct()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getProductById = createAsyncThunk(
  'product/get-product',
  async (id, thunkAPI) => {
    try {
      return await productService.getProductById(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addToWishlist = createAsyncThunk(
  'product/wishlist',
  async (productId, thunkAPI) => {
    try {
      return await productService.addToWishlist(productId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  productTitle: '',
  productDescription: '',
  productPrice: '',
  productBrandName: '',
  productCategoryName: '',
  productTagsName: '',
  productColor: [],
  productQuantity: '',
  productSold: '',
  productImages: [],
  productTotalRating: '',
}

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.productTitle = action.payload.title
        state.productDescription = action.payload.description
        state.productPrice = action.payload.price
        state.productBrandName = action.payload.brand
        state.productCategoryName = action.payload.category
        state.productTagsName = action.payload.tags
        state.productColor = action.payload.color
        state.productQuantity = action.payload.quantity
        state.productSold = action.payload.sold
        state.productImages = action.payload.images
        state.productTotalRating = action.payload.totalrating
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(addToWishlist.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.wishlist = action.payload
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetState, (state) => {
        state.productTitle = initialState.productTitle
        state.productDescription = initialState.productDescription
        state.productPrice = initialState.productPrice
        state.productBrandName = initialState.productBrandName
        state.productCategoryName = initialState.productCategoryName
        state.productTagsName = initialState.productTagsName
        state.productColor = initialState.productColor
        state.productQuantity = initialState.productQuantity
        state.productSold = initialState.productSold
        state.productImages = initialState.productImages
        state.productTotalRating = initialState.productTotalRating
      })
  },
})

export default productSlice.reducer
