import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
// import 'bootstrap/dist/js/bootstrap.min.js'
import './Header.css'
const Header = () => {
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
                <Link className="text-white d-block text-start">Dev Mr.H</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Product Now ..."
                  aria-label="Search Product Now ..."
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text p-3"
                  id="basic-addon2"
                  style={{ backgroundColor: '#febd69' }}
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="nav-link">
                <div>
                  <Link className="d-flex align-items-center gap-10">
                    <img src="images/compare.svg" className="nav-icon" alt="" />
                    <p>
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10">
                    <img
                      src="images/wishlist.svg"
                      className="nav-icon"
                      alt=""
                    />
                    <p>
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10">
                    <img src="images/user.svg" className="nav-icon" alt="" />
                    <p>
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center position-relative">
                    <img src="images/cart.svg" className="nav-icon" alt="" />
                    <div>
                      <span className="card-count position-absolute">0</span>
                    </div>
                  </Link>
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
                      <img src="images/menu.svg" alt="" />
                      <span className="d-inline-block  me-5">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="#">
                          Something else here
                        </Link>
                      </li>
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
