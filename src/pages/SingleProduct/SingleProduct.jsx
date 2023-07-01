/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import ReactStars from 'react-rating-stars-component'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { CiHeart, CiRepeat } from 'react-icons/ci'

import './SingleProduct.css'
import Container from '~/components/Container'
import PopularProduct from '~/components/PopularProduct'
import Color from '~/components/Color'

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    let zoom = document.querySelector('.zoom')
    let imgZoom = document.getElementById('imgZoom')

    zoom.addEventListener('mousemove', (event) => {
      imgZoom.style.opacity = 1
      let positionPx = event.x - zoom.getBoundingClientRect().left
      let positionX = (positionPx / zoom.offsetWidth) * 100

      let positionPy = event.y - zoom.getBoundingClientRect().top
      let positionY = (positionPy / zoom.offsetHeight) * 100

      imgZoom.style.setProperty('--zoom-x', positionX + '%')
      imgZoom.style.setProperty('--zoom-y', positionY + '%')

      let transformX = -(positionX - 50) / 3.5
      let transformY = -(positionY - 50) / 3.5
      imgZoom.style.transform = `scale(1.5) translateX(${transformX}%) translateY(${transformY}%)`
    })
    zoom.addEventListener('mouseout', () => {
      imgZoom.style.opacity = 0
    })
  }, [])

  const nextImageBtn = () => {
    const widthItem = document.querySelector('.other-image').offsetWidth
    document.querySelector('.list-product-image').scrollLeft += widthItem
  }
  const prevImageBtn = () => {
    const widthItem = document.querySelector('.other-image').offsetWidth
    document.querySelector('.list-product-image').scrollLeft -= widthItem
  }

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    if (quantity >= 2) setQuantity(quantity - 1)
  }
  return (
    <>
      <Container
        title="Product name"
        back="product"
        className="main-product-wrapper"
      >
        {/* Product detail */}
        <div className="col-5">
          {/* Product Image */}
          <div className="main-product-image">
            <div className="zoom">
              <img src="../images/tab3.jpg" alt="" />
              <img src="../images/tab3.jpg" alt="" id="imgZoom" />
            </div>
            <div className="list-image-wrapper position-relative">
              <div className="list-product-image">
                <div className="other-product-image d-flex justify-content-between">
                  <div className="other-image">
                    <img src="../images/tab.jpg" alt="" />
                  </div>
                  <div className="other-image">
                    <img src="../images/tab1.jpg" alt="" />
                  </div>
                  <div className="other-image">
                    <img src="../images/tab2.jpg" alt="" />
                  </div>
                  <div className="other-image">
                    <img src="../images/tab3.jpg" alt="" />
                  </div>
                  <div className="other-image">
                    <img src="../images/tab3.jpg" alt="" />
                  </div>
                  <div className="other-image">
                    <img src="../images/tab3.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="direction">
                <button id="prev" onClick={prevImageBtn}>
                  <GrFormPrevious />
                </button>
                <button id="next" onClick={nextImageBtn}>
                  <GrFormNext />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          {/* Product detail */}
          <div className="main-product-detail">
            <h3>
              Apple iPad (9th Generation): with A13 Bionic chip, 10.2-inch
              Retina Display, 64GB, Wi-Fi, 12MP front/8MP Back Camera, Touch ID,
              All-Day Battery Life – Silver
            </h3>
            <div className="rating-and-sold d-flex align-items-center">
              <p className="rating-avg">4.8</p>
              <ReactStars
                count={5}
                size={24}
                value={4}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="rating-count d-flex">
                479&nbsp;
                <p className="rating-count__text">ratings</p>
              </span>
              <span className="sold d-flex">
                1,7k&nbsp; <p className="sold__text">sold</p>
              </span>
            </div>
            <h3 className="mt-4">$100.00</h3>
            <div className="product-select">
              <span className="d-flex mt-3">
                Size: <p> &nbsp;S</p>
              </span>
              <div className="product-option d-flex mt-3">
                <button className="product-size">S</button>
                <button className="product-size">L</button>
              </div>
            </div>
            <div className="product-select mt-3">
              <span className="product-color d-flex mb-3">
                Color: <p> &nbsp;Grey</p>
              </span>
              <Color />
            </div>
            <table className="cover-product mt-4">
              <tr>
                <th>Brand</th>
                <th>Apple</th>
              </tr>
              <tr>
                <th>Type</th>
                <th>Ipad</th>
              </tr>
              <tr>
                <th>Category</th>
                <th>Smart Phone</th>
                <th>Tablet</th>
              </tr>
              <tr>
                <th>Availability</th>
                <th>904</th>
              </tr>
            </table>
            <div className="d-flex align-items-center gap-30 mt-3">
              <div className="product-action">
                <a href="" className="d-flex align-items-center">
                  <CiHeart className="product-action-icon" />
                  Add to Wishlist
                </a>
              </div>
              <div className="product-action">
                <a href="" className="d-flex align-items-center">
                  <CiRepeat className="product-action-icon" />
                  Compare Product
                </a>
              </div>
            </div>
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
          </div>
        </div>
      </Container>
      {/* Description */}
      <section className="description-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur nisi similique illum aut perferendis voluptas,
                  quisquam obcaecati qui nobis officia. Voluptatibus in harum
                  deleniti labore maxime officia esse eos? Repellat?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews */}
      <section className="review-wrapper home-wrapper-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control fs-14"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Consectetur fugit ut excepturi quos. Id reprehenderit
                      voluptatem placeat consequatur suscipit ex. Accusamus
                      dolore quisquam deserunt voluptate, sit magni perspiciatis
                      quas iste?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PopularProduct />
    </>
  )
}

export default SingleProduct
