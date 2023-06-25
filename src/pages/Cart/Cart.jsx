import './Cart.css'
import Meta from '~/components/Meta'
import BreadCrumb from '~/components/BreadCrumb'

const Cart = () => {
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title="Cart" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xl"></div>
      </div>
    </>
  )
}

export default Cart
