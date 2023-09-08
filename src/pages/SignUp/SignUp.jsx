import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

import './SignUp.css'
import Container from '~/components/Container'
import CustomInput from '~/components/CustomInput'
import { register } from '~/features/user/userSlice'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const newUser = useSelector((state) => state.auth)
  const { isLoading, isSuccess, isError, newUserCreated } = newUser

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required('First name is Required'),
      lastname: Yup.string().required('Last name is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
      mobile: Yup.string()
        .matches(
          /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
          'Mobile Phone must be numeric'
        )
        .min(10, 'Mobile phone must be 10 characters long')
        .required('Mobile Phone is Required'),
      password: Yup.string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Must match "password" field value')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      delete values.confirmPassword
      dispatch(register(values))
    },
  })

  useEffect(() => {
    if (isSuccess && !!newUserCreated) {
      toast.success('Register Successfully!')
      navigate('/login')
    }
    if (isError) {
      toast.error('Something Went Wrong!')
    }
  }, [isLoading, isSuccess, isError])

  return (
    <>
      <Container title="SignUp" back="login" className="login-wrapper">
        <div className="auth-card">
          <h3 className="text-center mb-3">Sign Up</h3>
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="d-flex flex-column"
          >
            <div className="d-flex gap-15">
              <div className="name-input">
                <CustomInput
                  type="text"
                  label="First Name"
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
              <div className="name-input">
                <CustomInput
                  type="text"
                  label="Last Name"
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
            <CustomInput
              type="text"
              label="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
            <div className="error">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
            <CustomInput
              type="tel"
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
            <CustomInput
              type="password"
              label="Password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <CustomInput
              type="password"
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange('confirmPassword')}
              onBlur={formik.handleBlur('confirmPassword')}
            />
            <div className="error">
              {formik.touched.confirmPassword &&
              formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
            <div>
              <div className="my-3 d-flex justify-content-center gap-15 align-items-center">
                <button className="button border-0" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  )
}

export default SignUp
