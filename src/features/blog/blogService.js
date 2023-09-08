import axios from 'axios'
import { httpRequest } from '~/utils/httpRequest'

const getAllBlog = async () => {
  const response = await axios.get(`${httpRequest}blog`)

  return response.data
}

const getBlogById = async (id) => {
  const response = await axios.get(`${httpRequest}blog/${id}`)

  return response.data
}

const blogService = { getAllBlog, getBlogById }

export default blogService
