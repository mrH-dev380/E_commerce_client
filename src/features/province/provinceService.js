import axios from 'axios'

export const getProvince = async () => {
  const response = await axios.get(`https://provinces.open-api.vn/api/p`)

  return response.data
}

export const getDistricts = async (provinceId) => {
  const response = await axios.get(
    `https://provinces.open-api.vn/api/p/${provinceId}?depth=2`
  )

  return response.data
}

export const getWards = async (districtId) => {
  const response = await axios.get(
    `https://provinces.open-api.vn/api/d/${districtId}?depth=2`
  )

  return response.data
}

const provinceService = {
  getProvince,
  getDistricts,
  getWards,
}

export default provinceService
