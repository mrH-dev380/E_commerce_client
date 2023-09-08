import axios from 'axios'
import { httpRequest } from '~/utils/httpRequest'
import config from '../../config/'

export const login = async (userData) => {
  const response = await axios.post(`${httpRequest}auth/login`, userData)

  return response.data
}

export const register = async (userData) => {
  const response = await axios.post(`${httpRequest}auth/register`, userData)
  if (response.data) return response.data
}

export const updateUser = async (userData) => {
  const response = await axios.put(
    `${httpRequest}user/update`,
    userData,
    config.axios
  )

  return response.data
}

const getWishlist = async () => {
  const response = await axios.get(`${httpRequest}user/wishlist`, config.axios)

  return response.data
}

const getCart = async () => {
  const response = await axios.get(`${httpRequest}user/cart`, config.axios)

  return response.data
}

const addToCart = async (cartData) => {
  const response = await axios.post(
    `${httpRequest}user/cart`,
    cartData,
    config.axios
  )
  return response.data
}

const getPreOrder = async () => {
  const response = await axios.get(`${httpRequest}user/pre-order`, config.axios)
  return response.data
}

const createPreOrder = async (preOrderData) => {
  const response = await axios.post(
    `${httpRequest}user/pre-order`,
    preOrderData,
    config.axios
  )
  return response.data
}

const emptyCart = async () => {
  const response = await axios.delete(
    `${httpRequest}user/empty-cart`,
    config.axios
  )
  return response.data
}

const deletePreOrder = async () => {
  const response = await axios.delete(
    `${httpRequest}user/pre-order`,
    config.axios
  )
  return response.data
}

const applyCoupon = async (coupon) => {
  const response = await axios.post(
    `${httpRequest}coupon/findCouponByName`,
    coupon,
    config.axios
  )

  return response.data
}

const addAddress = async (addressInfo) => {
  const response = await axios.put(
    `${httpRequest}user/add-address`,
    addressInfo,
    config.axios
  )

  return response.data
}

const createOrder = async (detailInfo) => {
  console.log(detailInfo)
  const response = await axios.post(
    `${httpRequest}user/cart/create-order`,
    detailInfo,
    config.axios
  )

  return response.data
}

const getAllUserOrder = async () => {
  const response = await axios.get(`${httpRequest}user/order`, config.axios)

  return response.data
}

const forgetPassword = async (email) => {
  const response = await axios.post(`${httpRequest}auth/forget-password`, email)

  return response.data
}

const resetPassword = async (data) => {
  const response = await axios.put(
    `${httpRequest}auth/reset-password/${data.token}`,
    { password: data.password }
  )

  return response.data
}

const authService = {
  login,
  register,
  updateUser,
  getWishlist,
  addToCart,
  getCart,
  emptyCart,
  getPreOrder,
  createPreOrder,
  deletePreOrder,
  applyCoupon,
  createOrder,
  getAllUserOrder,
  addAddress,
  forgetPassword,
  resetPassword,
}

export default authService
