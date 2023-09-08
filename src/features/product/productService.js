import axios from 'axios'
import { httpRequest } from '~/utils/httpRequest'
import config from '../../config/'

const getAllProduct = async () => {
  const response = await axios.get(`${httpRequest}product`)

  return response.data
}

const getProductById = async (id) => {
  const response = await axios.get(`${httpRequest}product/${id}`, config.axios)
  return response.data
}

const addToWishlist = async (productId) => {
  const response = await axios.put(
    `${httpRequest}product/wishlist`,
    { prodId: productId },
    config.axios
  )
  return response.data
}

const productService = {
  getAllProduct,
  getProductById,
  addToWishlist,
}

export default productService
