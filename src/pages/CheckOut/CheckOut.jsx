import { GiMoneyStack } from 'react-icons/gi'
import { HiCheckCircle } from 'react-icons/hi'
import { BsCircle } from 'react-icons/bs'
import { ImCreditCard } from 'react-icons/im'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'

import './CheckOut.css'
import ProductCheckOut from '~/components/ProductCheckOut/ProductCheckOut'
import Container from '~/components/Container'
import { useState } from 'react'

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState(true)
  const [addressShipping, setAddressShipping] = useState(true)

  const handlePaymentMethod = () => {
    setPaymentMethod(!paymentMethod)
  }

  const handleChangeAddress = () => {
    setAddressShipping(!addressShipping)
  }
  return (
    <>
      <Container title="Check Out" className="checkout-wrapper">
        <div className="col-8">
          <div className="shipping-address-wrapper">
            <div className="shipping-address-header d-flex align-item-center justify-content-between">
              <p>Shipping Address</p>
              {/* Edit address */}
              <label htmlFor="nav-address" className="edit-address">
                Edit
              </label>
              <input
                type="checkbox"
                className="nav-address-input"
                id="nav-address"
              ></input>
              <label
                htmlFor="nav-address"
                className="nav-address__overlay"
              ></label>
              <div className="nav-address-info">
                <div className="nav-address-header d-flex align-items-center justify-content-between">
                  <p>Shipping Adress</p>
                  <a href="" className="add-new-address">
                    Add new address
                  </a>
                </div>
                <div
                  className={`address-info-content d-flex mt-4 ${
                    addressShipping ? 'method-select' : ''
                  }`}
                  onClick={handleChangeAddress}
                >
                  {addressShipping ? (
                    <HiCheckCircle className="method-check" />
                  ) : (
                    <BsCircle className="method-no-check" />
                  )}
                  <div className="shipping-address-info">
                    <div className="d-flex mb-2">
                      <p>Quach Thinh</p>
                      <p>0987654321</p>
                    </div>
                    <p>Văn chung 4/34</p>
                    <span>
                      Postcode: Hồ Chí Minh - Quận Tân Bình - Phường 13
                    </span>
                  </div>
                </div>
                <div
                  className={`address-info-content d-flex mt-4 ${
                    addressShipping ? '' : 'method-select'
                  }`}
                  onClick={handleChangeAddress}
                >
                  {addressShipping ? (
                    <BsCircle className="method-no-check" />
                  ) : (
                    <HiCheckCircle className="method-check" />
                  )}
                  <div className="shipping-address-info">
                    <div className="d-flex mb-2">
                      <p>Quach Thinh</p>
                      <p>0987654321</p>
                    </div>
                    <p>Văn chung 4/34</p>
                    <span>
                      Postcode: Hồ Chí Minh - Quận Tân Bình - Phường 13
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* end edit address */}
            <div className="shipping-address-contain">
              <div className="d-flex mb-3">
                <p>Quach Thinh</p>
                <p>0987654321</p>
              </div>
              <p>Văn chung 4/34, Phường 13, Quận Tân Bình, Hồ Chí Minh</p>
            </div>
          </div>
          <div className="package mt-4">
            <div className="package-header">
              <p>Package</p>
            </div>
            <div className="package-product">
              <ProductCheckOut noChangeQuantity />
              <ProductCheckOut noChangeQuantity />
              <ProductCheckOut noChangeQuantity />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="payment-wrapper">
            <p className="mt-3">Select Payment Method</p>
            <div
              className={`payment-method mt-3 ${
                paymentMethod ? 'method-select' : ''
              }`}
              onClick={handlePaymentMethod}
            >
              <div className="payment-method__cash d-flex align-items-center">
                <div className="cash-icon">
                  <GiMoneyStack />
                </div>
                <p className="payment-method-detail">Cash On Delivery</p>
              </div>
              <span>Pay when you receive</span>
              <div className="payment-select-icon">
                {paymentMethod ? (
                  <HiCheckCircle className="method-check" />
                ) : (
                  <BsCircle className="method-no-check" />
                )}
              </div>
            </div>
            <div
              className={`payment-method mt-3 ${
                paymentMethod ? '' : 'method-select'
              }`}
              onClick={handlePaymentMethod}
            >
              <div className="payment-method__cash d-flex align-items-center">
                <div className="cash-icon">
                  <ImCreditCard />
                </div>
                <p className="payment-method-detail">Credit / Visa</p>
              </div>
              <div className="payment-option">
                <FaCcVisa className="card-icon" />
                <FaCcMastercard className="card-icon mx-3" />
              </div>
              <div className="payment-select-icon">
                {paymentMethod ? (
                  <BsCircle className="method-no-check" />
                ) : (
                  <HiCheckCircle className="method-check" />
                )}
              </div>
            </div>
            <div className="coupon-apply gap-15 mt-5 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Coupon"
              />
              <button>APPLY</button>
            </div>
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
            <div className="invoice-detail d-flex justify-content-between mt-4">
              <p>Discount</p>
              <span>- $ 17.00</span>
            </div>

            <div className="subtotal d-flex justify-content-between mt-4">
              <h2>Subtotal</h2>
              <span>$ 517.00</span>
            </div>
            <button className="button-vice mt-4">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CheckOut
