import './OurStore.css'
import ProductCard from '~/components/ProductCard'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Container from '~/components/Container'
import { getAllProduct } from '~/features/product/productSlice'
import { getAllCategory } from '../../features/productCategory/productCategorySlice'
import { deletePreOrder } from '../../features/user/userSlice'

const OurStore = () => {
  const [grid, setGrid] = useState(4)
  const dispatch = useDispatch()
  const product = useSelector((state) => state.product.products)
  const category = useSelector((state) => state.productCategory.categories)

  useEffect(() => {
    if (product.length === 0) dispatch(getAllProduct())
    if (category.length === 0) dispatch(getAllCategory())
    dispatch(deletePreOrder())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const productCategories = useSelector(
    (state) => state.productCategory.categories
  )

  return (
    <>
      <Container title="Our Store" className="store-wrapper">
        {/* Filter */}
        <div className="col-3">
          <div className="filter-card mb-3">
            <h3 className="filter-title">Shop By Categories</h3>
            <div>
              <ul className="ps-0 mb-0">
                {productCategories.map((category, index) => {
                  return <li key={index}>{category.title}</li>
                })}
              </ul>
            </div>
          </div>
          <div className="filter-card mb-3">
            {/* Filter By*/}
            <h3 className="filter-title">Filter By</h3>
            <div>
              <h5 className="sub-title">Availability</h5>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="inStock"
                  />
                  <label className="form-check-label ms-3" htmlFor="inStock">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="outStock"
                  />
                  <label className="form-check-label ms-3" htmlFor="outStock">
                    Out of Stock(0)
                  </label>
                </div>
              </div>
              {/* Price */}
              <h5 className="sub-title">Price</h5>
              <div className="range-price d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="From"
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="To"
                  />
                  <label htmlFor="floatingInput1">To</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Grid Products */}
        <div className="col-9">
          <div className="filter-sort-grid mb-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-10">
                <p
                  className="mb-0 d-block"
                  style={{ width: '100px', color: 'black' }}
                >
                  Sort By:
                </p>
                <select
                  name=""
                  defaultValue={'manula'}
                  className="form-control form-select"
                  id=""
                >
                  <option value="manual">Featured</option>
                  <option value="best-selling">Best selling</option>
                  <option value="title-ascending">Alphabetically, A-Z</option>
                  <option value="title-descending">Alphabetically, Z-A</option>
                  <option value="price-ascending">Price, low to high</option>
                  <option value="price-descending">Price, high to low</option>
                  <option value="created-ascending">Date, old to new</option>
                  <option value="created-descending">Date, new to old</option>
                </select>
              </div>
              <div className="d-flex align-items-center gap-10">
                <p className="totalProducts mb-0">21 Products</p>
                <div className="d-flex gap-10 align-items-center grid">
                  <img
                    onClick={() => {
                      setGrid(3)
                    }}
                    src="images/gr4.svg"
                    className="d-block img-fluid"
                    alt="grid"
                  />
                  <img
                    onClick={() => {
                      setGrid(4)
                    }}
                    src="images/gr3.svg"
                    className="d-block img-fluid"
                    alt="grid"
                  />
                  <img
                    onClick={() => {
                      setGrid(6)
                    }}
                    src="images/gr2.svg"
                    className="d-block img-fluid"
                    alt="grid"
                  />

                  <img
                    onClick={() => {
                      setGrid(12)
                    }}
                    src="images/gr.svg"
                    className="d-block img-fluid"
                    alt="grid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="products-list pb-5">
            <div className="d-flex gap-10 flex-wrap">
              <ProductCard grid={grid} data={product} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurStore
