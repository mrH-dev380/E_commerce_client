import { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'

import './QuantitySelect.css'

const QuantitySelect = () => {
  const [quantity, setQuantity] = useState(1)

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    if (quantity >= 2) setQuantity(quantity - 1)
  }
  
  return (
    <div className="product-quantity-select mt-3  ">
      <p className="mb-3">Quantity</p>
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
      <button className="button mx-5">Add to Cart</button>
      <button className="button-vice">Buy It Now</button>
    </div>
  )
}

export default QuantitySelect
