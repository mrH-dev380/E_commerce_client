import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import './Cart.css'
import noProduct from '../../assets/images/no-products-found.png'
import Container from '~/components/Container'
import ProductCheckOut from '../../components/ProductCheckOut/ProductCheckOut'
import {
  createPreOrder,
  getPreOrder,
  deletePreOrder,
} from '../../features/user/userSlice'

const Cart = () => {
  const [isCheckedAll, setIsCheckedAll] = useState(false)
  const [isChecked, setIsChecked] = useState([])
  const [summary, setSummary] = useState(0)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userCart = useSelector((state) => state.auth.cart)
  let cartData = []
  userCart &&
    userCart[0]?.products?.map((product) =>
      cartData.push({
        _id: product.product._id,
        color: product.color,
        count: product.count,
        detailProductId: product.detailProductId,
        cartProdId: product._id,
      })
    )
  if (userCart.length > 0) {
    var { cartTotal, products } = userCart[0]
  }
  let fullIdProductCart = []
  userCart &&
    userCart[0]?.products?.map((product) => fullIdProductCart.push(product._id))

  let preOrderData = useRef([])

  const handleSelectAll = () => {
    if (isCheckedAll === false) {
      // Select All
      preOrderData.current = [...cartData]
      setIsCheckedAll(!isCheckedAll)
      setIsChecked([...fullIdProductCart])
      setSummary(cartTotal)
    } else if (isCheckedAll === true) {
      // UnSelect All
      preOrderData.current = []
      setIsCheckedAll(!isCheckedAll)
      setIsChecked([])
      setSummary(0)
    }
  }
  const handleSelect = (e) => {
    const { id, checked } = e.target

    if (!checked) {
      // checked is false
      setIsChecked(isChecked.filter((item) => item !== id))
      setIsCheckedAll(false)

      products.map((product) => {
        if (product._id === id) {
          setSummary((prev) => prev - product.count * product.price)
        }
      })

      preOrderData.current = preOrderData.current.filter(
        (item) => item.cartProdId !== id
      )
    } else {
      // checked is true
      setIsChecked([...isChecked, id])
      if (isChecked.length + 1 === fullIdProductCart.length) {
        setIsCheckedAll(true)
      }

      products.map((product) => {
        if (product._id === id) {
          setSummary((prev) => prev + product.count * product.price)
        }
      })

      const addPreOderProd = cartData.filter((item) => item.cartProdId === id)
      preOrderData.current.push(addPreOderProd[0])
    }
  }
  // console.log('preOrder', preOrderData.current)
  // console.log(isChecked)
  const checkOutCart = async () => {
    await dispatch(deletePreOrder())
    if (isChecked.length === 0) {
      toast.error('Please Choose A Product To Check Out')
    } else {
      await preOrderData.current.map((item) => {
        delete item.cartProdId
      })
      await dispatch(createPreOrder({ cart: preOrderData.current }))
      await dispatch(getPreOrder())
      navigate('/check-out')
    }
  }

  return (
    <>
      <Container title="Cart" className="cart-wrapper">
        {cartData.length === 0 ? (
          <div className="no-product">
            <img src={noProduct} alt="" />
          </div>
        ) : (
          <>
            <div className="col-8">
              <div className="row">
                <div className="d-flex mb-3  cart-nav">
                  <div className="col-8">
                    <div className="select-all d-flex align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="selectAll"
                          id="selectAll"
                          onChange={handleSelectAll}
                          checked={isCheckedAll}
                        />
                        <label
                          className="form-check-label ms-3 label"
                          htmlFor="outStock"
                        >
                          Choose All Product
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 qty-price">Quantity</div>
                  <div className="col-2 qty-price">Price</div>
                </div>
                {/* Product info */}
                <div className="checkout-product-wrapper">
                  {products?.map((productItem, index) => {
                    return (
                      <div key={index} className=" d-flex align-items-center">
                        <div className="select-all d-flex align-items-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={productItem._id}
                              onChange={handleSelect}
                              checked={isChecked.includes(productItem._id)}
                            />
                          </div>
                        </div>
                        <ProductCheckOut
                          data={productItem}
                          isChecked={isChecked}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
              {/* Cart product */}
            </div>
            <div className="col-4 invoice h-100">
              <div>
                <h3>Order Summary</h3>
              </div>
              <div className="invoice-detail d-flex justify-content-between align-items-center mt-4">
                <p>Item ({isChecked.length})</p>
                <span>$ {summary.toFixed(2)}</span>
              </div>
              <div className="invoice-detail d-flex justify-content-between mt-4">
                <p>Shipping</p>
                <span>$ {summary > 100 ? (0).toFixed(2) : (9).toFixed(2)}</span>
              </div>
              <div className="subtotal d-flex justify-content-between mt-4 pt-4">
                <h2>Subtotal</h2>
                <span>
                  ${' '}
                  {summary.toFixed(2) > 100
                    ? summary.toFixed(2)
                    : (summary + 9).toFixed(2)}
                </span>
              </div>
              <a
                className="button mt-4"
                style={{ cursor: 'pointer' }}
                onClick={checkOutCart}
              >
                CHECK OUT
              </a>
            </div>
          </>
        )}
      </Container>
    </>
  )
}

export default Cart
