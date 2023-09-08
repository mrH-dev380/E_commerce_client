/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import ReactStars from 'react-rating-stars-component'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { CiHeart, CiRepeat } from 'react-icons/ci'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import './SingleProduct.css'
import Container from '~/components/Container'
import PopularProduct from '~/components/PopularProduct'
import { getProductById } from '../../features/product/productSlice'
import formatNumber from '../../utils/formatNumber'
import noImage from '~/assets/images/noimage.png'
import { addToWishlist, resetState } from '../../features/product/productSlice'
import { getAllColor } from '../../features/color/colorSlice'
import {
  addToCart,
  getCart,
  deletePreOrder,
  createPreOrder,
  getPreOrder,
} from '../../features/user/userSlice'

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true)

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const getUserFromLocalStorage = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null
  const user = !!getUserFromLocalStorage

  const [quantity, setQuantity] = useState(1)

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    if (quantity >= 2) setQuantity(quantity - 1)
  }

  const wishlistData = useSelector((state) => state.auth.userWishlist)
  let wishlist = []
  wishlistData && wishlistData.map((product) => wishlist.push(product._id))

  const userCart = useSelector((state) => state.auth.cart)
  let cartData = []
  userCart &&
    userCart[0]?.products?.map((product) =>
      cartData.push({
        _id: product.product._id,
        color: product.color,
        count: product.count,
      })
    )

  const product = useSelector((state) => state.product.products)
  let popularProduct = []
  product?.map((item) => {
    if (item.tags === 'popular') {
      popularProduct.push(item)
    }
  })

  const productId = location.pathname.split('/')[2]

  useEffect(() => {
    if (productId !== undefined) {
      dispatch(getProductById(productId))
      dispatch(getAllColor())
    }
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

    return () => {
      dispatch(resetState())
    }
  }, [])

  const {
    productTitle,
    productDescription,
    productPrice,
    productBrandName,
    productCategoryName,
    productColor,
    productQuantity,
    productSold,
    productImages,
    productTotalRating,
  } = useSelector((state) => state.product)

  const colorData = useSelector((state) => state.color.colors)
  let colorList = []
  productColor &&
    colorData &&
    colorData.map(
      (color) =>
        productColor.includes(color.title) &&
        colorList.push({ code: color.code, title: color.title })
    )

  const [colorTitle, setColorTitle] = useState('')

  const imageCheck = !!productImages

  const [image, setImage] = useState(noImage)

  useEffect(() => {
    setImage(productImages ? productImages[0]?.url : noImage)
    setColorTitle(productColor ? productColor[0] : '')
  }, [productImages, productColor])

  const nextImageBtn = () => {
    const widthItem = document.querySelector('.other-image').offsetWidth
    document.querySelector('.list-product-image').scrollLeft += widthItem
  }
  const prevImageBtn = () => {
    const widthItem = document.querySelector('.other-image').offsetWidth
    document.querySelector('.list-product-image').scrollLeft -= widthItem
  }

  const addProductCart = async () => {
    const prodIdCart = []
    cartData.map((product) => prodIdCart.push(product._id))
    const findProdCart = prodIdCart.includes(productId)

    if (!user) {
      toast.error('Please login and try again')
    } else if (findProdCart) {
      let prodInCart = cartData.filter((product) => product._id === productId)
      let filterColor = prodInCart.filter(
        (product) => product.color === colorTitle
      )
      let filterProduct = cartData.filter(
        (product) => product._id !== productId
      )
      if (filterColor.length > 0) {
        prodInCart.map((prod) => {
          if (prod.color === colorTitle) {
            prod.count += 1
          }
        })
        Array.prototype.push.apply(filterProduct, prodInCart)
        await dispatch(addToCart({ cart: filterProduct }))
        dispatch(getCart())
        toast.success('Add to Cart Successfully!')
      } else {
        prodInCart.push({ color: colorTitle, count: quantity, _id: productId })
        Array.prototype.push.apply(filterProduct, prodInCart)
        await dispatch(addToCart({ cart: filterProduct }))
        dispatch(getCart())
        toast.success('Add to Cart Successfully!')
      }
    } else {
      cartData.push({
        color: colorTitle,
        count: quantity,
        _id: productId,
      })
      await dispatch(addToCart({ cart: cartData }))
      dispatch(getCart())
      toast.success('Add to Cart Successfully!')
    }
  }

  const buyProductNow = async () => {
    await dispatch(
      createPreOrder({
        cart: [{ _id: productId, color: colorTitle, count: quantity }],
      })
    )
    await dispatch(getPreOrder())
    navigate('/check-out')
  }

  const addWishlist = (productId) => {
    const findProdWishlist = wishlist.includes(productId)
    if (!user) {
      toast.error('Please login and try again')
    } else if (!findProdWishlist && user) {
      dispatch(addToWishlist(productId))
      toast.success('Add to Wishlist Successfully!')
    } else {
      toast.info('Product Already in Wishlist')
    }
  }

  return (
    <>
      <Container
        title={productTitle}
        back="product"
        className="main-product-wrapper"
      >
        {/* Product detail */}
        <div className="col-5">
          {/* Product Image */}
          <div className="main-product-image">
            <div className="zoom">
              {imageCheck ? (
                <>
                  <img src={image} alt="" id="mainImg" />
                  <img src={image} alt="" id="imgZoom" />
                </>
              ) : (
                <>
                  <img src={noImage} alt="" />
                  <img src={noImage} alt="" id="imgZoom" />
                </>
              )}
            </div>
            <div className="list-image-wrapper position-relative">
              <div className="list-product-image">
                <div className="other-product-image d-flex justify-content-between">
                  {productImages?.map((prodImg, index) => {
                    return (
                      <div key={index} className="other-image">
                        <img
                          src={prodImg.url}
                          alt=""
                          onClick={() => setImage(prodImg.url)}
                        />
                      </div>
                    )
                  })}
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
            <h3>{productTitle}</h3>
            <div className="rating-and-sold d-flex align-items-center">
              <p className="rating-avg">{productTotalRating}</p>
              <ReactStars
                count={5}
                size={24}
                value={parseInt(productTotalRating)}
                edit={false}
                activeColor="#ffd700"
              />
              <span className="rating-count d-flex">
                {formatNumber(productTotalRating)}&nbsp;
                <p className="rating-count__text">ratings</p>
              </span>
              <span className="sold d-flex">
                {formatNumber(productSold)}&nbsp;{' '}
                <p className="sold__text">sold</p>
              </span>
            </div>
            <h3 className="mt-4">${productPrice}</h3>
            <div className="product-select mt-3">
              <span className="product-color d-flex mb-3">
                Color: <p> &nbsp;{colorTitle}</p>
              </span>
              <ul className="colors ps-0">
                {colorList?.map((color, index) => (
                  <li
                    key={index}
                    style={{ backgroundColor: color.code }}
                    onClick={() => setColorTitle(color.title)}
                  ></li>
                ))}
              </ul>
            </div>
            <table className="cover-product mt-4">
              <tr>
                <th>Brand</th>
                <th>{productBrandName}</th>
              </tr>
              <tr>
                <th>Category</th>
                <th>{productCategoryName}</th>
              </tr>
              <tr>
                <th>Availability</th>
                <th>{productQuantity}</th>
              </tr>
            </table>
            <div className="d-flex align-items-center gap-30 mt-3">
              <div
                className="product-action"
                onClick={() => addWishlist(productId)}
              >
                <div href="" className="d-flex align-items-center">
                  <CiHeart className="product-action-icon" />
                  Add to Wishlist
                </div>
              </div>
              <div className="product-action">
                <div href="" className="d-flex align-items-center">
                  <CiRepeat className="product-action-icon" />
                  Compare Product
                </div>
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
              <button
                className="button mx-5"
                onClick={() => addProductCart(productId)}
              >
                Add to Cart
              </button>
              <button className="button-vice" onClick={buyProductNow}>
                Buy It Now
              </button>
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
              <div
                className="bg-white p-3"
                dangerouslySetInnerHTML={{ __html: productDescription }}
              ></div>
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
      <PopularProduct data={popularProduct} />
    </>
  )
}

export default SingleProduct
