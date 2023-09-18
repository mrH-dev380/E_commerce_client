import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import authService from './userService'

const getUserFromLocalStorage = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : null

export const logOut = createAction('log-out')

export const removeCoupon = createAction('remove-coupon')

export const login = createAsyncThunk(
  'auth/login', // action name
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const register = createAsyncThunk(
  'auth/register', // action name
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateUser = createAsyncThunk(
  'user/update', // action name
  async (userData, thunkAPI) => {
    try {
      return await authService.updateUser(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getWishlist = createAsyncThunk(
  'user/get-wishlist',
  async (thunkAPI) => {
    try {
      return await authService.getWishlist()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getCart = createAsyncThunk(
  'cart/get-user-cart',
  async (thunkAPI) => {
    try {
      return await authService.getCart()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addToCart = createAsyncThunk(
  'cart/add-to-cart',
  async (cartData, thunkAPI) => {
    try {
      return await authService.addToCart(cartData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getPreOrder = createAsyncThunk(
  'pre-order/get-pre-order',
  async (thunkAPI) => {
    try {
      return await authService.getPreOrder()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const createPreOrder = createAsyncThunk(
  'pre-order/create-pre-order',
  async (preOrderData, thunkAPI) => {
    try {
      return await authService.createPreOrder(preOrderData)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const emptyCart = createAsyncThunk(
  'cart/empty-cart',
  async (thunkAPI) => {
    try {
      return await authService.emptyCart()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const deletePreOrder = createAsyncThunk(
  'pre-order/delete-pre-order',
  async (thunkAPI) => {
    try {
      return await authService.deletePreOrder()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const applyCoupon = createAsyncThunk(
  'pre-order/apply-coupon',
  async (coupon, thunkAPI) => {
    try {
      return await authService.applyCoupon(coupon)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const addAddress = createAsyncThunk(
  'user/add-address',
  async (addressInfo, thunkAPI) => {
    try {
      return await authService.addAddress(addressInfo)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const createOrder = createAsyncThunk(
  'user/create-order',
  async (detailInfo, thunkAPI) => {
    try {
      return await authService.createOrder(detailInfo)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getAllUserOrder = createAsyncThunk(
  'user/get-all-order',
  async (thunkAPI) => {
    try {
      return await authService.getAllUserOrder()
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const forgetPassword = createAsyncThunk(
  'user/forget-password',
  async (email, thunkAPI) => {
    try {
      return await authService.forgetPassword(email)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const resetPassword = createAsyncThunk(
  'user/reset-password',
  async (data, thunkAPI) => {
    try {
      return await authService.resetPassword(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  user: getUserFromLocalStorage,
  orders: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  userWishlist: [],
  cart: [],
  preOrder: [],
  order: [],
  orderCreated: [],
  coupon: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder // auth
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        if (state.isSuccess) {
          localStorage.setItem('token', JSON.stringify(action.payload.token))
          localStorage.setItem('user', JSON.stringify(action.payload))
          toast.info('Login Successfully!')
        }
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.isError = true
        if (state.isError) {
          toast.error('Something went wrong')
        }
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        if (state.isSuccess) {
          toast.success('Register Successfully!')
        }
        state.newUserCreated = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true
        state.isSuccess = false
        state.message = action.payload.response.data.message
        state.isLoading = false
        if (state.isError) {
          toast.error(action.payload.response.data.message)
        }
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isError = false
        state.isLoading = false
        state.isSuccess = true
        if (state.isSuccess) {
          toast.info('Update Successfully!')
        }
        state.user = action.payload
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isError = true
        if (state.isError) {
          toast.error('Something went wrong')
        }
        state.isSuccess = false
        state.message = action.error
        state.isLoading = false
      })
      .addCase(getWishlist.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.userWishlist = action.payload.wishlist
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getCart.pending, (state) => {
        state.isLoading = false
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.cart = action.payload
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = false
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = action.success
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(emptyCart.pending, (state) => {
        state.isLoading = false
      })
      .addCase(emptyCart.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.cart = initialState.cart
      })
      .addCase(emptyCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getPreOrder.pending, (state) => {
        state.isLoading = false
      })
      .addCase(getPreOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.preOrder = action.payload
      })
      .addCase(getPreOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(createPreOrder.pending, (state) => {
        state.isLoading = false
      })
      .addCase(createPreOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.message = action.success
      })
      .addCase(createPreOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(deletePreOrder.pending, (state) => {
        state.isLoading = false
      })
      .addCase(deletePreOrder.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.preOrder = initialState.preOrder
      })
      .addCase(deletePreOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(applyCoupon.pending, (state) => {
        state.isLoading = false
      })
      .addCase(applyCoupon.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.coupon = action.payload
      })
      .addCase(applyCoupon.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(removeCoupon, (state) => {
        state.coupon = initialState.coupon
      })
      .addCase(addAddress.pending, (state) => {
        state.isLoading = false
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = false
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        if (state.isSuccess) {
          toast.success('Order Completed!')
        }
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        if (state.isError) {
          toast.error('Something went wrong!')
        }
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(getAllUserOrder.pending, (state) => {
        state.isLoading = false
      })
      .addCase(getAllUserOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        state.order = action.payload
      })
      .addCase(getAllUserOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = false
      })
      .addCase(forgetPassword.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        if (state.isSuccess) {
          toast.info('Please check your mail to change your password!')
        }
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        if (state.isError) {
          toast.error(action.payload)
        }
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = false
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
        state.isSuccess = true
        if (state.isSuccess) {
          toast.info('Update Password Successfully!')
        }
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        if (state.isError) {
          toast.error('Something went wrong!')
        }
        state.isSuccess = false
        state.message = action.error
      })
      .addCase(logOut, (state) => {
        state.user = null
        state.userWishlist = initialState.userWishlist
        state.cart = initialState.cart
        state.orders = initialState.orders
        state.preOrder = initialState.preOrder
      })
  },
})

export default authSlice.reducer
