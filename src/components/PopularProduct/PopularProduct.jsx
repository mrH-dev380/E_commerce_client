/* eslint-disable react/prop-types */
import ProductCard from '../ProductCard/ProductCard'

const PopularProduct = (props) => {
  const { data } = props
  return (
    <>
      <section className="product-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard data={data} />
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularProduct
