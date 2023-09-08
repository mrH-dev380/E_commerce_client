import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import './ResetPassword.css'
import Container from '~/components/Container'
import { resetPassword } from '../../features/user/userSlice'

const ResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const token = location.pathname.split('/')[2]

  const user = useSelector((state) => state.auth.user)

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
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
      const data = {
        token: token,
        password: values.password,
      }
      dispatch(resetPassword(data))
      if (!user) {
        navigate('/')
      } else {
        navigate('/login')
      }
    },
  })
  return (
    <>
      <Container title="ResetPassword" className="login-wrapper">
        <div className="auth-card">
          <h3 className="text-center mb-3">Reset Password</h3>
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="d-flex flex-column"
          >
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="New Password"
              value={formik.values.password}
              onChange={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
            />
            <div className="error">
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
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
                <button type="submit" className="button border-0">
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

export default ResetPassword
