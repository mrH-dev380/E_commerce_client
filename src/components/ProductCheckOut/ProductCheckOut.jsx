/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { HiOutlineTrash } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { addToCart, getCart, emptyCart } from '../../features/user/userSlice'

import './ProductCheckOut.css'

const ProductCheckOut = (props) => {
  const { data, isChecked, noChangeQuantity } = props
  const { count, color, product, _id } = data
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userCart = useSelector((state) => state.auth.cart)

  let cartData = []

  userCart &&
    userCart[0]?.products?.map((product) =>
      cartData.push({
        _id: product.product._id,
        color: product.color,
        count: product.count,
        prodId: product._id,
      })
    )

  const checked = isChecked?.includes(_id)

  const handlePlus = async (id) => {
    if (checked) {
      toast.info('Please Uncheck And Try Again')
    } else {
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].prodId === id) {
          cartData[i].count = count + 1
        }
        delete cartData[i].prodId
      }

      await dispatch(addToCart({ cart: cartData }))
      dispatch(getCart())
    }
  }

  const handleMinus = async (id) => {
    if (checked) {
      toast.info('Please Uncheck And Try Again')
    } else {
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].prodId === id) {
          cartData[i].count = count - 1
        }
        delete cartData[i].prodId
      }

      await dispatch(addToCart({ cart: cartData }))
      dispatch(getCart())
    }
  }

  const handleLink = (id) => {
    navigate(`/product/${id}`)
  }

  const handleDelete = async (id) => {
    if (cartData.length === 1) {
      dispatch(emptyCart())
    } else if (cartData.length > 1) {
      const cartDelete = cartData.filter((item) => item.prodId !== id)

      cartDelete.forEach((item) => delete item.prodId)
      await dispatch(addToCart({ cart: cartDelete }))
      dispatch(getCart())
    }
  }

  return (
    <>
      <div className="product-info d-flex py-4">
        <div
          className="col-8 d-flex"
          style={{ cursor: 'pointer' }}
          onClick={() => handleLink(product._id)}
        >
          <img
            src={product.images[0].url}
            alt=""
            className="cart-product-image"
          />
          <div className="pt-3">
            <h5 className="product-title">
              {product.title}
              {product.title}
            </h5>
            <p className="description">
              Brand: {product.brand}, Color: {color}
            </p>
          </div>
        </div>
        <div className="col-2 qty-price">
          {noChangeQuantity ? (
            <span>{count}</span>
          ) : (
            <div>
              <button
                className={`quantity-action ${
                  count === 1 ? 'quantity-action__disabled' : ''
                }`}
                onClick={() => handleMinus(_id)}
              >
                <BiMinus />
              </button>
              <span>{count}</span>
              <button
                className="quantity-action"
                onClick={() => handlePlus(_id)}
              >
                <BiPlus />
              </button>
            </div>
          )}
        </div>
        <div className="col-2 qty-price wishlist-remove">
          <p>$ {product.price * count}</p>
          {noChangeQuantity ? (
            ''
          ) : (
            <div className="remove-product">
              <div className="remove-icon" onClick={() => handleDelete(_id)}>
                <HiOutlineTrash />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProductCheckOut
