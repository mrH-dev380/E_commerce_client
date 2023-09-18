import axios from 'axios'
import { httpRequest } from '~/utils/httpRequest'

const getAllCategory = async () => {
  const response = await axios.get(`${httpRequest}category`)

  return response.data
}

const getAllBrand = async () => {
  const response = await axios.get(`${httpRequest}brand`)

  return response.data
}

const productCategoryService = {
  getAllCategory,
  getAllBrand,
}

export default productCategoryService
