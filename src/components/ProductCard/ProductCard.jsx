/* eslint-disable react/prop-types */
import ReactStars from 'react-rating-stars-component'
import './ProductCard.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import noImage from '../../assets/images/noimage.png'
import { addToWishlist } from '../../features/product/productSlice'
import { addToCart, getCart } from '../../features/user/userSlice'

const ProductCard = (props) => {
  const { grid, data } = props

  let location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const getUserFromLocalStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null
  const user = !!getUserFromLocalStorage
  const wishlistData = useSelector((state) => state.auth.userWishlist)
  let wishlist = []
  wishlistData && wishlistData.map((product) => wishlist.push(product._id))

  const userCart = useSelector((state) => state.auth.cart)
  let cartData = []
  userCart &&
    userCart[0]?.products?.map((product) =>
      cartData.push({
        _id: product.product._id,
        color: product.color,
        count: product.count,
      })
    )

  let productData = []

  if (location.pathname === '/') {
    productData = data?.slice(0, 4)
  } else {
    productData = data
  }

  const addWishlist = (productId) => {
    const findProdWishlist = wishlist.includes(productId)
    if (!user) {
      toast.error('Please login and try again')
    } else if (!findProdWishlist && user) {
      dispatch(addToWishlist(productId))
      toast.success('Add to Wishlist Successfully!')
    } else {
      toast.info('Product Already in Wishlist')
    }
  }

  const addProductCart = async (product) => {
    const prodIdCart = []
    cartData.map((prod) => prodIdCart.push(prod._id))
    const findProdCart = prodIdCart.includes(product._id)

    if (!user) {
      toast.error('Please login and try again')
    } else if (findProdCart && user) {
      cartData.map((prod) => {
        if (prod.color === product.color[0]) {
          prod.count += 1
        }
      })
      await dispatch(addToCart({ cart: cartData }))
      dispatch(getCart())
      toast.success('Add to Cart Successfully!')
    } else {
      cartData.push({
        color: product.color[0],
        count: 1,
        _id: product._id,
      })
      await dispatch(addToCart({ cart: cartData }))
      dispatch(getCart())
      toast.success('Add to Cart Successfully!')
    }
  }

  return (
    <>
      {productData?.map((product, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname === '/product' ? `gr-${grid}` : 'col-3'
            } `}
          >
            <div className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <button type="button" className="border-0 bg-transparent">
                  <img
                    src="../images/wish.svg"
                    alt="wishlist"
                    onClick={() => addWishlist(product._id)}
                  />
                </button>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src="../images/prodcompare.svg" alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img
                      src="../images/view.svg"
                      alt="view"
                      onClick={() => navigate('/product/' + product?._id)}
                    />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img
                      src="../images/add-cart.svg"
                      alt="addcart"
                      onClick={() => addProductCart(product)}
                    />
                  </button>
                </div>
              </div>
              <div className="product-image">
                <img src={product.images[0].url || noImage} alt="" />
              </div>
              <div className="product-details">
                <h6 className="brand">{product.brand}</h6>
                <h5 className="product-title">{product.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={parseInt(product.totalrating)}
                  edit={false}
                  activeColor="#ffd700"
                />
                <div
                  className={`description ${
                    grid === 12 ? 'd-block' : 'd-none'
                  }`}
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                ></div>
                <p className="price">${product.price}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ProductCard
