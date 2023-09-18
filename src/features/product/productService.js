import axios from 'axios'
import { httpRequest } from '~/utils/httpRequest'
import config from '../../config/'

const getAllProduct = async (filter) => {
  const {
    page,
    search,
    sort,
    pricegte,
    pricelte,
    brand,
    category,
    quantityAsc,
    quantityDesc,
  } = filter
  console.log(
    `${httpRequest}product?limit=12${page ? `&page=${page}` : `&page=1`}${
      search ? `&text[search]=${search}` : ``
    }${sort ? `&sort=${sort}` : ``}${
      pricegte ? `&price[gte]=${pricegte}` : ``
    }${pricelte ? `&price[lte]=${pricelte}` : ``}${
      quantityAsc ? `&quantity[gte]=${quantityAsc}` : ``
    }${quantityDesc ? `&quantity[lt]=${quantityDesc}` : ``}${
      category ? `&category=${category}` : ``
    }${brand ? `&brand=${brand}` : ``}`
  )
  const isPage = !!page
  const response = await axios.get(
    `${httpRequest}product?limit=12${search ? `&text[search]=${search}` : ``}${
      isPage ? `&page=${page}` : `&page=1`
    }${sort ? `&sort=${sort}` : `&sort=-createdAt`}${
      pricegte ? `&price[gte]=${pricegte}` : ``
    }${pricelte ? `&price[lte]=${pricelte}` : ``}${
      brand ? `&brand=${brand}` : ``
    }${category ? `&category=${category}` : ``}${
      quantityAsc ? `&quantity[gte]=${quantityAsc}` : ``
    }${quantityDesc ? `&quantity[lt]=${quantityDesc}` : ``}`
  )

  return response.data
}

const getPreviewProduct = async (searchInput) => {
  const response = await axios.get(
    `${httpRequest}product?limit=4${
      searchInput ? `&text[search]=${searchInput}` : ``
    }`
  )

  return response.data
}

const getPopularProduct = async () => {
  const response = await axios.get(
    `${httpRequest}product?tags=popular&limit=4&sort=-createdAt`
  )

  return response.data
}

const getFeaturedProduct = async () => {
  const response = await axios.get(
    `${httpRequest}product?tags=featured&limit=4&sort=-createdAt`
  )

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
  getPreviewProduct,
  getPopularProduct,
  getFeaturedProduct,
  getProductById,
  addToWishlist,
}

export default productService
