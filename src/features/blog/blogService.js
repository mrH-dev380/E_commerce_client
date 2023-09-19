import axios from 'axios'

const getAllBlog = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?domains=tinhte.vn&pageSize=12&page=1&apiKey=fbc5839174824b06b400b6f698160e80`
  )

  return response.data
}

const getMoreBlog = async (data) => {
  const {page} = data
  const response = await axios.get(
    `https://newsapi.org/v2/everything?domains=tinhte.vn&pageSize=12&page=${page}&apiKey=fbc5839174824b06b400b6f698160e80`
  )

  return response.data
}

const blogService = { getAllBlog, getMoreBlog }

export default blogService
