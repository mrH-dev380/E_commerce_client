import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import './UserInfo.css'
import Container from '~/components/Container'
import CustomInput from '~/components/CustomInput'
import { forgetPassword, updateUser } from '../../features/user/userSlice'

const UserInfo = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth.user)
  const { firstname, lastname, mobile, email } = userData

  const formik = useFormik({
    initialValues: {
      firstname: firstname,
      lastname: lastname,
      mobile: mobile,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First name is Required'),
      lastname: Yup.string().required('Last name is Required'),
      mobile: Yup.string().required('Mobile is Required'),
    }),
    onSubmit: async (values) => {
      dispatch(updateUser(values))
    },
  })

  const handleChangePassword = () => {
    dispatch(forgetPassword({ email: email }))
  }

  return (
    <Container title={'Information'} back="home" className="user-info-wrapper">
      <div className="col-2"></div>
      <div className="col-8" style={{ padding: '20px' }}>
        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="d-flex flex-column"
        >
          <div className="info-display d-flex">
            <span className="info-tag">Email</span>
            <p className="info-fix">{email}</p>
          </div>
          <div className="info-display d-flex align-items-center mt-4">
            <span className="info-tag">Mobile</span>
            <div className="name-input">
              <CustomInput
                type="text"
                label="Mobile"
                id="mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange('mobile')}
                onBlur={formik.handleBlur('mobile')}
              />
              <div className="error">
                {formik.touched.mobile && formik.errors.mobile ? (
                  <div>{formik.errors.mobile}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="info-display d-flex align-items-center mt-4">
            <span className="info-tag">First name</span>
            <div className="name-input">
              <CustomInput
                type="text"
                label="First name"
                id="firstname"
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange('firstname')}
                onBlur={formik.handleBlur('firstname')}
              />
              <div className="error">
                {formik.touched.firstname && formik.errors.firstname ? (
                  <div>{formik.errors.firstname}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="info-display d-flex align-items-center mt-4">
            <span className="info-tag">Last name</span>
            <div className="name-input">
              <CustomInput
                type="text"
                label="Last name"
                id="lastname"
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange('lastname')}
                onBlur={formik.handleBlur('lastname')}
              />
              <div className="error">
                {formik.touched.lastname && formik.errors.lastname ? (
                  <div>{formik.errors.lastname}</div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="info-display d-flex align-items-center mt-3">
            <span className="info-tag">Password</span>
            <p className="info-fix">********</p>
            <div
              className="button"
              style={{ cursor: 'pointer' }}
              onClick={handleChangePassword}
            >
              Change
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="button-vice mt-4"
              style={{
                borderRadius: '4px',
                borderColor: 'transparent',
                width: '100%',
              }}
              type="submit"
            >
              Update Information
            </button>
          </div>
        </form>
      </div>

      <div className="col-2"></div>
    </Container>
  )
}

export default UserInfo
