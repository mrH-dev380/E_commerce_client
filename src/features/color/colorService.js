import axios from 'axios'
import { httpRequest } from '~/utils/httpRequest'

export const getAllColor = async () => {
  const response = await axios.get(`${httpRequest}color`)

  return response.data
}

const colorService = { getAllColor }
export default colorService
