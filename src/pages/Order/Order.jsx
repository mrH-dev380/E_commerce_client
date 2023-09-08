import './Order.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import noProduct from '../../assets/images/no-products-found.png'
import { getAllUserOrder } from '../../features/user/userSlice'
import ProductCheckOut from '~/components/ProductCheckOut'
import Container from '~/components/Container'
const Order = () => {
  const dispatch = useDispatch()

  const orderData = useSelector((state) => state.auth.order)

  useEffect(() => {
    dispatch(getAllUserOrder())
  }, [])
  return (
    <>
      <Container title="Orders" className="order-wrapper">
        {orderData.length === 0 ? (
          <div className="no-product">
            <img src={noProduct} alt="" />
          </div>
        ) : (
          <>
            <div className="col-2"></div>
            <div className="col-8">
              {orderData.map((order, index) => {
                return (
                  <div key={index} className="single-order">
                    <div className="order__id">
                      <span>Order #{order._id}</span>
                      <span>Status : {order.orderStatus}</span>
                    </div>
                    {order.orderItems.map((product, index) => {
                      return (
                        <ProductCheckOut
                          key={index}
                          data={product}
                          noChangeQuantity={true}
                        />
                      )
                    })}
                    <span className="order-total">
                      SubTotal : $
                      {order.totalPriceAfterDiscount
                        ? order.totalPriceAfterDiscount
                        : order.totalPrice}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="col-2"></div>
          </>
        )}
      </Container>
    </>
  )
}

export default Order
