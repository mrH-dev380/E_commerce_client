/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import ReactImageZoom from 'react-image-zoom'

import './SingleProduct.css'
import Container from '~/components/Container'
import PopularProduct from '~/components/PopularProduct'

const SingleProduct = () => {
  const props = {
    width: 440,
    zoomWidth: 400,
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg',
  }
  const [orderedProduct, setOrderedProduct] = useState(true)
  return (
    <>
      <Container
        title="Product name"
        back="product"
        className="main-product-wrapper"
      >
        {/* Product detail */}
        <div className="col-5">
          <div className="main-product-image">
            <div>
              <ReactImageZoom {...props} />
            </div>
          </div>
        </div>
        <div className="col-7"></div>
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
