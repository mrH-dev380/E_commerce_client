/* eslint-disable react/prop-types */
import { useState } from 'react'

import { BiMinus, BiPlus } from 'react-icons/bi'
import { HiOutlineTrash } from 'react-icons/hi'

import './ProductCheckOut.css'

const ProductCheckOut = ({ noChangeQuantity }) => {
  const [quantity, setQuantity] = useState(1)

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    if (quantity >= 2) setQuantity(quantity - 1)
  }
  return (
    <>
      <div className="product-info d-flex py-4">
        <div className="col-8 d-flex">
          <img src="../images/tab.jpg" alt="" className="cart-product-image" />
          <div className="pt-3">
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students Kids
              headphones bulk 10 pack multi colored for students headphones bulk
              10 pack multi colored for students
            </h5>
            <p className="description">Size: S, Color: Grey</p>
          </div>
        </div>
        <div className="col-2 qty-price">
          {noChangeQuantity ? (
            <span>1</span>
          ) : (
            <div>
              <button
                className={`quantity-action ${
                  quantity === 1 ? 'quantity-action__disabled' : ''
                }`}
                onClick={handleMinus}
              >
                <BiMinus />
              </button>
              <span>{quantity}</span>
              <button className="quantity-action" onClick={handlePlus}>
                <BiPlus />
              </button>
            </div>
          )}
        </div>
        <div className="col-2 qty-price wishlist-remove">
          <p>$ {499.0 * quantity}</p>
          <div className="remove-product">
            <div className="remove-icon">
              <HiOutlineTrash />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCheckOut
