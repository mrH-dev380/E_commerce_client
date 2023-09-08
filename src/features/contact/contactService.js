import axios from 'axios'
import { httpRequest } from '~/utils/httpRequest'

const postQuery = async (dataContact) => {
  const response = await axios.post(`${httpRequest}enquiry`, dataContact)

  return response.data
}

const contactService = {
  postQuery
}

export default contactService