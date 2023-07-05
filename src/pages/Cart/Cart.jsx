import { Link } from 'react-router-dom'

import './Cart.css'
import Container from '~/components/Container'
import ProductCheckOut from '../../components/ProductCheckOut/ProductCheckOut'
import { useState } from 'react'

const Cart = () => {
  const [checkedAll, setCheckedAll] = useState(false)

  return (
    <>
      <Container title="Cart" className="cart-wrapper">
        <div className="col-8">
          <div className="row">
            <div className="d-flex mb-3  cart-nav">
              <div className="col-8">
                <div className="select-all d-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="outStock"
                      onChange={() => setCheckedAll(!checkedAll)}
                      checked={checkedAll && 'checked'}
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
              <div className=" d-flex align-items-center">
                <div className="select-all d-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                </div>
                <ProductCheckOut />
              </div>
              <div className=" d-flex align-items-center">
                <div className="select-all d-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                </div>
                <ProductCheckOut />
              </div>
              <div className=" d-flex align-items-center">
                <div className="select-all d-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                </div>
                <ProductCheckOut />
              </div>
            </div>
          </div>
          {/* Cart product */}
        </div>
        <div className="col-4 invoice">
          <div>
            <h3>Order Summary</h3>
          </div>
          <div className="invoice-detail d-flex justify-content-between align-items-center mt-4">
            <p>Item (3)</p>
            <span>$ 499.00</span>
          </div>
          <div className="invoice-detail d-flex justify-content-between mt-4">
            <p>Shipping</p>
            <span>$ 9.00</span>
          </div>
          <div className="coupon-apply gap-15 mt-4">
            <input type="text" className="form-control" placeholder="Coupon" />
            <button>APPLY</button>
          </div>
          <div className="subtotal d-flex justify-content-between mt-4">
            <h2>Subtotal</h2>
            <span>$ 517.00</span>
          </div>
          <Link to="/check-out" className="button mt-4">
            CHECK OUT
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Cart
