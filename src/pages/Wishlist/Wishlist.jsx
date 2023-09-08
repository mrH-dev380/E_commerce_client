import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Wishlist.css'
import Container from '~/components/Container'
import noImage from '../../assets/images/noimage.png'
import noProduct from '../../assets/images/no-products-found.png'

import { getWishlist } from '~/features/user/userSlice'
import { addToWishlist } from '~/features/product/productSlice'

const Wishlist = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWishlist())
  }, [])

  const wishlistState = useSelector((state) => state.auth.userWishlist)
  let wishlistData = []
  wishlistState && wishlistState.map((product) => wishlistData.push(product))

  const removeWishlist = async (id) => {
    await dispatch(addToWishlist(id))
    dispatch(getWishlist())
  }
  return (
    <>
      <Container title="Wishlist" className="wishlist-wrapper">
        {wishlistData.length === 0 && (
          <div className="no-product">
            <img src={noProduct} alt="" />
          </div>
        )}
        {wishlistData?.map((product, index) => {
          return (
            <div key={index} className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                  onClick={() => removeWishlist(product._id)}
                />
                <div className="wishlist-card-image">
                  <img
                    src={product.images[0].url || noImage}
                    className="img-fluid img-wishlist w-100"
                    alt="watch"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">{product.title}</h5>
                  <h6 className="price">$ {product.price}</h6>
                </div>
              </div>
            </div>
          )
        })}
      </Container>
    </>
  )
}

export default Wishlist
