import ReactStars from 'react-rating-stars-component'
import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <>
      <div className="col-3">
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
          <div className="product-image">
            <img src="images/tab.jpg" alt="" />
            <img src="images/tab1.jpg" alt="" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={4.3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ProductCard
