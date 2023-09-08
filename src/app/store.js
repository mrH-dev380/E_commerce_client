import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/user/userSlice'
import blogReducer from '../features/blog/blogSlice'
import colorReducer from '../features/color/colorSlice'
import contactReducer from '../features/contact/contactSlice'
import productCategoryReducer from '../features/productCategory/productCategorySlice'
import productReducer from '../features/product/productSlice'
import provinceReducer from '../features/province/provinceSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    blog: blogReducer,
    color: colorReducer,
    contact: contactReducer,
    product: productReducer,
    productCategory: productCategoryReducer,
    provinceAPI: provinceReducer,
  },
})

export default store
