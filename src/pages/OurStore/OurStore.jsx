import './OurStore.css'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from '@uidotdev/usehooks'
import { Pagination } from 'antd'
// eslint-disable-next-line no-unused-vars
import React from 'react'

import ProductCard from '~/components/ProductCard'
import Container from '~/components/Container'
import { getAllProduct } from '~/features/product/productSlice'
import {
  getAllCategory,
  getAllBrand,
} from '../../features/productCategory/productCategorySlice'
import { deletePreOrder } from '../../features/user/userSlice'

const OurStore = () => {
  const dispatch = useDispatch()
  const [grid, setGrid] = useState(4)
  const [inStock, setInStock] = useState(false)
  const [outStock, setOutStock] = useState(false)
  const [priceFrom, setPriceFrom] = useState()
  const [priceTo, setPriceTo] = useState()
  const debouncedPriceFrom = useDebounce(priceFrom, 1000)
  const debouncedPriceTo = useDebounce(priceTo, 1000)

  const filter = useRef({})

  const product = useSelector((state) => state.product.products)
  const category = useSelector((state) => state.productCategory.categories)
  const brand = useSelector((state) => state.productCategory.brands)

  useEffect(() => {
    if (location.state) filter.current.category = location.state.categoryState
    if (product.length === 0) dispatch(getAllProduct(filter.current))
    if (category.length === 0) dispatch(getAllCategory())
    if (brand.length === 0) dispatch(getAllBrand())
    dispatch(deletePreOrder())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const productCategories = useSelector(
    (state) => state.productCategory.categories
  )

  // Filter by Category
  const handleSelectCategory = async (e) => {
    await delete filter.current.page
    setPagePagination(1)
    await delete filter.current.category
    if (e) {
      filter.current.category = e
      await dispatch(getAllProduct(filter.current))
    } else {
      await dispatch(getAllProduct(filter.current))
    }
  }

  // Filter by Brand
  const handleSelectBrand = async (e) => {
    await delete filter.current.page
    setPagePagination(1)
    await delete filter.current.brand
    if (e) {
      filter.current.brand = e
      await dispatch(getAllProduct(filter.current))
    } else {
      await dispatch(getAllProduct(filter.current))
    }
  }

  // Filter by Sort
  const handleSortProduct = async (e) => {
    filter.current.sort = e
    await delete filter.current.page
    setPagePagination(1)
    await dispatch(getAllProduct(filter.current))
  }

  // Filter by Stock
  const handleOutStockChecked = async () => {
    await delete filter.current.page
    setPagePagination(1)
    if (outStock) {
      setOutStock(!outStock)
      await delete filter.current.quantityDesc
      await dispatch(getAllProduct(filter.current))
    } else {
      setInStock(false)
      setOutStock(!outStock)
      await delete filter.current.quantityAsc
      filter.current.quantityDesc = 1
      await dispatch(getAllProduct(filter.current))
    }
  }

  const handleInStockChecked = async () => {
    await delete filter.current.page
    setPagePagination(1)
    if (inStock) {
      setInStock(!inStock)
      await delete filter.current.quantityAsc
      await dispatch(getAllProduct(filter.current))
    } else {
      setOutStock(false)
      setInStock(!inStock)
      await delete filter.current.quantityDesc
      filter.current.quantityAsc = 1
      await dispatch(getAllProduct(filter.current))
    }
  }

  // Filter by Price
  useEffect(() => {
    async function filterPrice() {
      await delete filter.current.page
      setPagePagination(1)
      filter.current.pricegte = debouncedPriceFrom
      filter.current.pricelte = debouncedPriceTo
      filter.current.page = 1

      if (!debouncedPriceFrom === true) {
        await delete filter.current.pricegte
      }
      if (!debouncedPriceTo === true) {
        await delete filter.current.pricelte
      }

      await dispatch(getAllProduct(filter.current))
    }

    filterPrice()
  }, [debouncedPriceFrom, debouncedPriceTo])

  // Pagination
  const [pagePagination, setPagePagination] = useState(
    !product ? product.currentPage : 1
  )

  const onChangePage = async (page) => {
    setPagePagination(page)
    filter.current.page = page
    await dispatch(getAllProduct(filter.current))
  }

  return (
    <>
      <Container title="Our Store" className="store-wrapper">
        {/* Filter */}
        <div className="col-3">
          <div className="filter-card mb-3">
            <h3 className="filter-title">Shop By Categories</h3>
            <div>
              <ul className="ps-0 mb-0">
                <li
                  style={{
                    fontWeight: !filter.current.category ? '500' : '400',
                    color: !filter.current.category ? '#1c1c1b' : '',
                  }}
                  onClick={() => handleSelectCategory()}
                >
                  All Product
                </li>
                {productCategories.map((category, index) => {
                  return (
                    <li
                      key={index}
                      onClick={() => handleSelectCategory(category.title)}
                      style={{
                        fontWeight:
                          filter.current.category === category.title
                            ? '500'
                            : '400',
                        color:
                          filter.current.category === category.title
                            ? '#1c1c1b'
                            : '',
                      }}
                    >
                      {category.title}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="filter-card mb-3">
            {/* Filter By*/}
            <h3 className="filter-title">Filter By</h3>
            <div>
              <h5 className="sub-title">Brand</h5>
              <div>
                <ul className="ps-0 mb-0">
                  <li
                    style={{
                      fontWeight: !filter.current.brand ? '500' : '400',
                      color: !filter.current.brand ? '#1c1c1b' : '',
                    }}
                    onClick={() => handleSelectBrand()}
                  >
                    All Brand
                  </li>
                  {brand.map((brand, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => handleSelectBrand(brand.title)}
                        style={{
                          fontWeight:
                            filter.current.brand === brand.title
                              ? '500'
                              : '400',
                          color:
                            filter.current.brand === brand.title
                              ? '#1c1c1b'
                              : '',
                        }}
                      >
                        {brand.title}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <h5 className="sub-title">Availability</h5>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input in-stock-check"
                    type="checkbox"
                    value=""
                    id="inStock"
                    checked={inStock}
                    onChange={handleInStockChecked}
                  />
                  <label className="form-check-label ms-3" htmlFor="inStock">
                    In Stock
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input out-stock-check"
                    type="checkbox"
                    value=""
                    id="outStock"
                    checked={outStock}
                    onChange={handleOutStockChecked}
                  />
                  <label className="form-check-label ms-3" htmlFor="outStock">
                    Out of Stock
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
                    value={priceFrom}
                    onChange={(e) => {
                      if (!e.target.value.startsWith(0)) {
                        setPriceFrom(e.target.value)
                      }
                    }}
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="To"
                    value={priceTo}
                    onChange={(e) => {
                      if (!e.target.value.startsWith(0)) {
                        setPriceTo(e.target.value)
                      }
                    }}
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
                  onChange={(e) => handleSortProduct(e.target.value)}
                >
                  <option value="-createdAt">Date, new to old</option>
                  <option value="createdAt">Date, old to new</option>
                  <option value="price">Price, low to high</option>
                  <option value="-price">Price, high to low</option>
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
              <ProductCard grid={grid} data={product.getProduct} />
            </div>
          </div>
          <div className="store-pagination">
            <Pagination
              total={product.totalItems}
              pageSize={12}
              defaultCurrent={product.currentPage}
              current={pagePagination}
              onChange={onChangePage}
            />
          </div>
        </div>

        <hr className="mt-5" />
      </Container>
    </>
  )
}

export default OurStore
