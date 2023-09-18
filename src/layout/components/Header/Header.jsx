import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { useThrottle } from '@uidotdev/usehooks'

import './Header.css'
import { getCart, getWishlist, logOut } from '../../../features/user/userSlice'
import { getAllCategory } from '~/features/productCategory/productCategorySlice'
import {
  getAllProduct,
  getPreviewProduct,
} from '../../../features/product/productSlice'
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getUserFromLocalStorage = localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null
  const user = !!getUserFromLocalStorage

  const [searchInput, setSearchInput] = useState()
  const throttledValue = useThrottle(searchInput, 1500)
  // const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    throttledValue && dispatch(getPreviewProduct(throttledValue))
    if (!throttledValue && previewProduct) {
      dispatch(getPreviewProduct(' '))
    }
  }, [throttledValue])

  const auth = useSelector((state) => state.auth.user)
  const previewProduct = useSelector(
    (state) => state.product.previewProducts.getProduct
  )

  useEffect(() => {
    if (user === true && auth) {
      dispatch(getCart())
      dispatch(getWishlist())
    }
    dispatch(getAllCategory())
  }, [user])

  const productCategories = useSelector(
    (state) => state.productCategory.categories
  )
  const cartData = useSelector((state) => state.auth.cart)

  const userCart = () => {
    if (user === false) {
      toast.error('Please login and try again')
    } else if (user) {
      navigate('/cart')
    }
  }

  const handleSelectCategory = async (e) => {
    await dispatch(getAllProduct({ category: e }))
  }

  const handleLogOut = async () => {
    if (user) {
      await localStorage.removeItem('token')
      await localStorage.removeItem('user')
      await dispatch(logOut())
      toast.info('Log Out Successfully!')
      navigate('/')
      window.location.reload(true)
    }
  }
  return (
    <>
      <header className="header-top-strip py-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <p className="text-white text-start mb-0">
                Free Shipping Over $100 & Free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline: <a href="tel:+84 4400 6066">(+84) 4400 6066</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white d-block text-start">
                  Dev Mr.H
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group search-header">
                <input
                  type="text"
                  className="form-control search-header-input"
                  style={{ fontSize: '14px' }}
                  placeholder="Search Product Now ..."
                  aria-label="Search Product Now ..."
                  aria-describedby="basic-addon2"
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <span
                  className="input-group-text p-3"
                  id="basic-addon2"
                  style={{ backgroundColor: '#febd69' }}
                >
                  <BsSearch className="fs-6" />
                </span>
                <ul className="dropdown-search">
                  {previewProduct?.map((item) => {
                    return (
                      <li key={item.id} className="search-item-link">
                        <a
                          onClick={() => {
                            navigate(`/product/${item._id}`)
                            window.location.reload(true)
                          }}
                        >
                          {item.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className="col-5">
              <div className="nav-link">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10"
                  >
                    <img
                      src="../images/compare.svg"
                      className="nav-icon"
                      alt=""
                    />
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10"
                  >
                    <img
                      src="../images/wishlist.svg"
                      className="nav-icon"
                      alt=""
                    />
                    <p>
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  {user ? (
                    <div className="dropdown">
                      <button
                        className="d-flex align-items-center gap-10 bg-transparent user-icon"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="../images/user.svg"
                          className="nav-icon"
                          alt=""
                        />
                        <p>My Account</p>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu__user"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <Link
                            to="/information"
                            className="dropdown-item text-white"
                          >
                            Information
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/orders"
                            className="dropdown-item text-white"
                          >
                            My Order
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="dropdown-item text-white"
                            onClick={handleLogOut}
                          >
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="d-flex align-items-center gap-10"
                    >
                      <img
                        src="../images/user.svg"
                        className="nav-icon"
                        alt=""
                      />
                      <p>
                        Login <br /> Sign Up
                      </p>
                    </Link>
                  )}
                </div>
                <div>
                  <div
                    // to="/cart"
                    className="d-flex align-items-center position-relative cart-button"
                    onClick={() => userCart()}
                  >
                    <img src="../images/cart.svg" className="nav-icon" alt="" />
                    <div>
                      <span className="card-count position-absolute">
                        {cartData.length > 0
                          ? cartData[0]?.products?.length
                          : 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-categories py-2">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="menu-lists gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="../images/menu.svg" alt="" />
                      <span className="d-inline-block  me-5">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      {productCategories.map((category) => {
                        return (
                          <li
                            key={category.id}
                            onClick={() => handleSelectCategory(category.title)}
                          >
                            <Link
                              className="dropdown-item text-white"
                              to="/product"
                              state={{ categoryState: category.title }}
                            >
                              {category.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
