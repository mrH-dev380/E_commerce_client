import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import './Home.css'
import Meta from '~/components/Meta'
import BlogCard from '~/components/BlogCard'
import ProductCard from '~/components/ProductCard'
import SpecialProduct from '~/components/SpecialProduct'
import PopularProduct from '~/components/PopularProduct'

const Home = () => {
  return (
    <>
      <Meta title="BWL Official" />
      {/* Banner */}
      <section className="home-wrapper-1 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sake</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>But IPad Air</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex justify-content-between align-items-center">
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service.png" alt="" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0 d-block text-start">
                      From all orders over $100
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-02.png" alt="" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0 d-block text-start">
                      Save up to 25% off
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-03.png" alt="" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0 d-block text-start">
                      Shop with an expert
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-04.png" alt="" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0 d-block text-start">
                      Get Factory direct price
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <img src="images/service-05.png" alt="" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0 d-block text-start">
                      100% Protected Payment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Furniture</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/homeapp.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Tablet</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tab.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Speaker</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/speaker.jpg" alt="" />
                </div>
                <div className="d-flex gap-15 align-items-center">
                  <div>
                    <h6>Laptop</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Collection */}
      <section className="feature-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-1.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-white">Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p className="text-white">
                    From $399or $16.62/mo. for 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-2.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-3.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/famous-4.webp"
                  className="img-fluid"
                  alt="famous"
                />
                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6 className="text-dark">Smart Watch Series 7</h6>
                  <p>From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Special Product */}
      <section className="special-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      {/* Product Card */}
      <PopularProduct />
      {/* Slider */}
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex" speed={40} gradient={true}>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog */}
      <section className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
