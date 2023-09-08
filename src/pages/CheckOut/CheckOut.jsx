import { GiMoneyStack } from 'react-icons/gi'
import { HiCheckCircle } from 'react-icons/hi'
import { BsCircle } from 'react-icons/bs'
import { ImCreditCard } from 'react-icons/im'
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

import './CheckOut.css'
import Container from '~/components/Container'
import CustomInput from '~/components/CustomInput'
import ProductCheckOut from '~/components/ProductCheckOut/ProductCheckOut'
import { getAllProduct } from '../../features/product/productSlice'
import {
  applyCoupon,
  getPreOrder,
  getCart,
  addAddress,
  removeCoupon,
  createOrder,
  deletePreOrder,
} from '../../features/user/userSlice'
import {
  getProvince,
  getDistricts,
  getWards,
  removeDistrict,
  removeWards,
} from '../../features/province/provinceSlice'

const CheckOut = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [addressChecked, setAddressChecked] = useState(false)
  const [editAddressChecked, setEditAddressChecked] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [paymentMethod, setPaymentMethod] = useState(true)
  const [couponApply, setCouponApply] = useState('')

  useEffect(() => {
    dispatch(getProvince())
    dispatch(getPreOrder())
  }, [])

  const provinceData = useSelector((state) => state.provinceAPI?.provinces)
  const districtData = useSelector((state) => state.provinceAPI?.districts)
  const wardData = useSelector((state) => state.provinceAPI?.wards)

  const [provinceSelect, setProvinceSelect] = useState('')
  const [districtSelect, setDistrictSelect] = useState('')
  const [wardSelect, setWardSelect] = useState('')

  const userPreOrder = useSelector((state) => state.auth.preOrder)
  const userInfo = useSelector((state) => state.auth.user)
  const coupon = useSelector((state) => state.auth.coupon)
  if (coupon) {
    var { discount } = coupon
  }

  const { address } = userInfo
  const [addressShipping, setAddressShipping] = useState(address[0]?.id)
  const [addressShippingInfo, setAddressShippingInfo] = useState([address[0]])

  if (userPreOrder) {
    var { products, shipping, cartTotal } = userPreOrder[0]
  }

  const handlePaymentMethod = () => {
    // setPaymentMethod(!paymentMethod)
    toast.info('BWL does not support this payment method yet')
  }

  const handleApplyCoupon = async () => {
    if (coupon) {
      dispatch(removeCoupon())
      setCouponApply('')
    } else {
      dispatch(applyCoupon({ coupon: couponApply }))
    }
  }

  const handleModalChange = () => {
    if (editAddressChecked === true) {
      setAddressChecked(false)
      setProvinceSelect('')
      setDistrictSelect('')
      setWardSelect('')
      dispatch(removeDistrict())
      formik.resetForm()
    }
    setEditAddressChecked(!editAddressChecked)
  }

  const handleChangeProvince = async (event) => {
    setProvinceSelect(event.target.value)
    dispatch(getDistricts(event.target.value))
    const provinceName = provinceData.find(
      (province) => province.code == event.target.value
    )
    formik.values.province = provinceName.name
    if (event.target.value !== districtSelect) {
      setDistrictSelect('District')
      setWardSelect('Ward')
      dispatch(removeWards())
    }
  }

  const handleChangeDistrict = async (event) => {
    setDistrictSelect(event.target.value)
    dispatch(getWards(event.target.value))
    const districtName = districtData.districts.find(
      (district) => district.code == event.target.value
    )
    formik.values.district = districtName.name
    if (event.target.value !== wardSelect) {
      setWardSelect('Ward')
    }
  }

  const handleChangeWard = async (event) => {
    setWardSelect(event.target.value)
    const wardName = wardData.wards.find(
      (ward) => ward.code == event.target.value
    )
    formik.values.ward = wardName.name
  }

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      province: '',
      district: '',
      ward: '',
      street: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('FullName is Required'),
      phoneNumber: Yup.string()
        .matches(
          /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
          'Phone Number must be numeric'
        )
        .min(10, 'Phone Number must be 10 characters long')
        .required('Phone Number is Required'),
      province: Yup.string().required('Province is Required'),
      district: Yup.string().required('District is Required'),
      ward: Yup.string().required('Ward is Required'),
      street: Yup.string().required('Street is Required'),
    }),
    onSubmit: async (values) => {
      dispatch(addAddress(values))
      setAddressChecked(!addressChecked)
      setProvinceSelect('')
      setDistrictSelect('')
      setWardSelect('')
      dispatch(removeDistrict())
      formik.resetForm()
    },
  })

  const handleCreateOrder = async () => {
    await dispatch(
      createOrder({ shippingInfo: addressShippingInfo[0], coupon: coupon })
    )
    await dispatch(getAllProduct())
    await dispatch(getCart())
    dispatch(deletePreOrder())
    navigate('/orders')
  }

  return (
    <>
      <Container title="Check Out" className="checkout-wrapper">
        <div className="col-8">
          <div className="row">
            <div
              className="shipping-address-wrapper"
              style={{ cursor: 'default' }}
            >
              <div className="shipping-address-header d-flex align-item-center justify-content-between">
                <p>Shipping Address</p>
                {/* Edit address */}
                <label htmlFor="nav-address" className="edit-address">
                  Edit
                </label>
                {/* Modal */}
                <input
                  type="checkbox"
                  className="nav-address-edit"
                  id="nav-address"
                  checked={editAddressChecked}
                  onChange={handleModalChange}
                ></input>
                <label
                  htmlFor="nav-address"
                  className="nav-address__overlay"
                ></label>
                {/* End modal */}
                <div className="nav-address-info">
                  <div className="nav-address-header d-flex align-items-center justify-content-between">
                    <p>Shipping Adress</p>
                    <label htmlFor="add-address" className="add-new-address">
                      Add new address
                    </label>
                    <input
                      type="checkbox"
                      className="add-address-input"
                      id="add-address"
                      checked={addressChecked}
                      onChange={() => setAddressChecked(!addressChecked)}
                    ></input>
                    <div className="add-address-form">
                      <div className="d-flex justify-content-between pb-5">
                        <p>Add New Address</p>
                        <div
                          className="add-new-address"
                          onClick={() => {
                            setAddressChecked(!addressChecked)
                            setProvinceSelect('')
                            setDistrictSelect('')
                            setWardSelect('')
                            dispatch(removeDistrict())
                            formik.resetForm()
                          }}
                        >
                          Return
                        </div>
                      </div>
                      <form
                        onSubmit={formik.handleSubmit}
                        action=""
                        className="d-flex flex-column new-address-info"
                      >
                        <div className="d-flex flex-column gap-15">
                          {/* Full name */}
                          <div className="name-input">
                            <CustomInput
                              type="text"
                              label="Full Name"
                              id="fullName"
                              name="fullName"
                              value={formik.values.fullName}
                              onChange={formik.handleChange('fullName')}
                              onBlur={formik.handleBlur('fullName')}
                            />
                            <div className="error">
                              {formik.touched.fullName &&
                              formik.errors.fullName ? (
                                <div>{formik.errors.fullName}</div>
                              ) : null}
                            </div>
                          </div>
                          {/* Phone number */}
                          <div className="name-input">
                            <CustomInput
                              type="text"
                              label="Phone Number"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={formik.values.phoneNumber}
                              onChange={formik.handleChange('phoneNumber')}
                              onBlur={formik.handleBlur('phoneNumber')}
                            />
                            <div className="error">
                              {formik.touched.phoneNumber &&
                              formik.errors.phoneNumber ? (
                                <div>{formik.errors.phoneNumber}</div>
                              ) : null}
                            </div>
                          </div>
                          {/* Province */}
                          <div
                            className="name-input"
                            style={{ marginBottom: '8px' }}
                          >
                            <select
                              name="province"
                              id="province"
                              className="select-address"
                              value={provinceSelect}
                              onChange={handleChangeProvince}
                            >
                              <option value="">City/Province</option>
                              {provinceData?.map((province) => (
                                <option
                                  value={province.code}
                                  key={province.code}
                                >
                                  {province.name}
                                </option>
                              ))}
                            </select>
                            <div className="error">
                              {formik.touched.province &&
                              formik.errors.province ? (
                                <div>{formik.errors.province}</div>
                              ) : null}
                            </div>
                          </div>
                          {/* District */}
                          <div
                            className="name-input"
                            style={{ marginBottom: '8px' }}
                          >
                            <select
                              name="district"
                              id="district"
                              className="select-address"
                              value={districtSelect}
                              onChange={handleChangeDistrict}
                            >
                              <option value="">District</option>
                              {districtData?.districts?.map((district) => (
                                <option
                                  value={district.code}
                                  key={district.code}
                                >
                                  {district.name}
                                </option>
                              ))}
                            </select>
                            <div className="error">
                              {formik.touched.district &&
                              formik.errors.district ? (
                                <div>{formik.errors.district}</div>
                              ) : null}
                            </div>
                          </div>
                          {/* Ward */}
                          <div
                            className="name-input"
                            style={{ marginBottom: '8px' }}
                          >
                            <select
                              name="ward"
                              id="ward"
                              className="select-address"
                              value={wardSelect}
                              onChange={handleChangeWard}
                            >
                              <option value="">Ward</option>
                              {wardData?.wards?.map((ward) => (
                                <option value={ward.code} key={ward.code}>
                                  {ward.name}
                                </option>
                              ))}
                            </select>
                            <div className="error">
                              {formik.touched.ward && formik.errors.ward ? (
                                <div>{formik.errors.ward}</div>
                              ) : null}
                            </div>
                          </div>
                          {/* Street */}
                          <div className="name-input">
                            <CustomInput
                              type="text"
                              label="Street"
                              id="street"
                              name="street"
                              value={formik.values.street}
                              onChange={formik.handleChange('street')}
                              onBlur={formik.handleBlur('street')}
                            />
                            <div className="error">
                              {formik.touched.street && formik.errors.street ? (
                                <div>{formik.errors.street}</div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="button-vice mt-5">
                          ADD NEW ADDRESS
                        </button>
                      </form>
                      {/* End add address */}
                    </div>
                  </div>
                  {/* Select Address */}
                  {address.map((userAddress) => (
                    <div
                      key={userAddress.id}
                      className={`address-info-content d-flex mt-4 ${
                        addressShipping !== userAddress.id
                          ? ''
                          : 'method-select'
                      }`}
                      onClick={() => {
                        setAddressShipping(userAddress.id)
                        setAddressShippingInfo(
                          address.filter((info) => info.id === userAddress.id)
                        )
                      }}
                    >
                      {addressShipping !== userAddress.id ? (
                        <BsCircle className="method-no-check" />
                      ) : (
                        <HiCheckCircle className="method-check" />
                      )}
                      <div className="shipping-address-info">
                        <div className="d-flex mb-2">
                          <p>{userAddress.fullName}</p>
                          <p>{userAddress.phoneNumber}</p>
                        </div>
                        <p>{userAddress.street}</p>
                        <span>
                          Postcode: {userAddress.province} -{' '}
                          {userAddress.district} - {userAddress.ward}
                        </span>
                      </div>
                    </div>
                  ))}
                  {/* End Select address */}
                </div>
              </div>
              {/* end edit address */}
              <div className="shipping-address-contain">
                <div className="d-flex mb-3">
                  <p>{addressShippingInfo[0]?.fullName}</p>
                  <p>{addressShippingInfo[0]?.phoneNumber}</p>
                </div>
                <p>
                  {addressShippingInfo[0]?.street} -{' '}
                  {addressShippingInfo[0]?.ward} -{' '}
                  {addressShippingInfo[0]?.district} -{' '}
                  {addressShippingInfo[0]?.province}
                </p>
              </div>
            </div>
            <div className=" package mt-4" style={{ cursor: 'default' }}>
              <div className="d-flex package-style">
                <div className="col-8 package-header">
                  <p>Package</p>
                </div>
                <div className="col-2 qty-price">Quantity</div>
                <div className="col-2 qty-price">Price</div>
              </div>
              <div className="package-product">
                {products?.map((product, index) => {
                  return (
                    <ProductCheckOut
                      key={index}
                      data={product}
                      noChangeQuantity={true}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="payment-wrapper" style={{ cursor: 'default' }}>
            <p className="mt-3">Select Payment Method</p>
            <div className={`payment-method mt-3 method-select`}>
              <div className="payment-method__cash d-flex align-items-center">
                <div className="cash-icon">
                  <GiMoneyStack />
                </div>
                <p className="payment-method-detail">Cash On Delivery</p>
              </div>
              <span>Pay when you receive</span>
              <div className="payment-select-icon">
                {paymentMethod ? (
                  <HiCheckCircle className="method-check" />
                ) : (
                  <BsCircle className="method-no-check" />
                )}
              </div>
            </div>
            <div
              className={`payment-method mt-3 `}
              onClick={handlePaymentMethod}
            >
              <div className="payment-method__cash d-flex align-items-center">
                <div className="cash-icon">
                  <ImCreditCard />
                </div>
                <p className="payment-method-detail">Credit / Visa</p>
              </div>
              <div className="payment-option">
                <FaCcVisa className="card-icon" />
                <FaCcMastercard className="card-icon mx-3" />
              </div>
              <div className="payment-select-icon">
                {paymentMethod ? (
                  <BsCircle className="method-no-check" />
                ) : (
                  <HiCheckCircle className="method-check" />
                )}
              </div>
            </div>

            <div className="coupon-apply gap-15 mt-5 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Coupon"
                value={couponApply}
                onChange={(e) => setCouponApply(e.target.value)}
              />
              <button style={{ cursor: 'pointer' }} onClick={handleApplyCoupon}>
                {!coupon ? 'APPLY' : 'REMOVE'}
              </button>
              <span style={{ display: coupon === null ? 'block' : 'none' }}>
                Invalid Coupon
              </span>
            </div>
            <div>
              <h3>Order Summary</h3>
            </div>
            <div className="invoice-detail d-flex justify-content-between align-items-center mt-4">
              <p>Item ({products.length})</p>
              <span>$ {cartTotal.toFixed(2)}</span>
            </div>
            <div className="invoice-detail d-flex justify-content-between mt-4">
              <p>Shipping</p>
              <span>$ {shipping.toFixed(2)}</span>
            </div>
            <div className="invoice-detail d-flex justify-content-between mt-4">
              <p>Discount</p>
              <span>
                {!coupon
                  ? `$ 0.00`
                  : `- $ ${((cartTotal * discount) / 100).toFixed(2)}`}
              </span>
            </div>

            <div className="subtotal d-flex justify-content-between mt-4">
              <h2>Subtotal</h2>
              <span>
                {!coupon
                  ? `$ ${(cartTotal + shipping).toFixed(2)}`
                  : `$ ${(
                      (cartTotal * (100 - discount)) / 100 +
                      shipping
                    ).toFixed(2)}`}
              </span>
            </div>
            <button className="button-vice mt-4" onClick={handleCreateOrder}>
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default CheckOut
