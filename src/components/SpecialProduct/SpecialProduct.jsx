import ReactStars from 'react-rating-stars-component'
import './SpecialProduct.css'
import { Link } from 'react-router-dom'
const SpecialProduct = () => {
  return (
    <>
      <div className="col-4 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div className="row">
              <div className="col-5">
                <img src="images/watch.jpg" className="img-fluid" alt="watch" />
              </div>
              <div className="col-7 special-product-content">
                <h5 className="brand">Havels</h5>
                <h6 className="title">
                  Samsung Galaxy Note10+ Mobile Phone; Sim...Samsung Galaxy
                  Note10+ Mobile Phone; Sim...
                </h6>
                <ReactStars
                  count={5}
                  size={24}
                  value={4}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="price">
                  <span className="new-price">$100</span> &nbsp;{' '}
                  <strike className="old-price">$200</strike>
                </p>
                <div className="discount-till d-flex align-items-center">
                  <p className="mb-0 px-3">
                    <b>5 </b>Days
                  </p>
                  <div className="d-flex gap-10 align-items-center">
                    <span className="badge rounded-circle bg-danger">12</span>:
                    <span className="badge rounded-circle bg-danger">31</span>:
                    <span className="badge rounded-circle bg-danger">1</span>
                  </div>
                </div>
                <div className="product-count my-4">
                  <p>Products: 5</p>
                  <div className="progress rounded-pill">
                    <div
                      className="progress-bar rounded-pill"
                      role="progressbar"
                      style={{ width: '25%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <Link className="button">OPTION</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecialProduct
