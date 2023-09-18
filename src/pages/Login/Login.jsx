import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import './Login.css'
import Container from '~/components/Container'
import CustomInput from '~/components/CustomInput'
import { login } from '~/features/user/userSlice'
import { useEffect } from 'react'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    if (user) {
      navigate('/')
      window.location.reload(true)
    }
  }, [user])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values))
      await dispatch(login(values))
    },
  })
  return (
    <>
      <Container title="Login" className="login-wrapper">
        <div className="auth-card">
          <h3 className="text-center pb-3">Login</h3>
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="d-flex flex-column"
          >
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
            <div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot Password?
              </Link>

              <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                <button type="submit" className="button border-0">
                  Login
                </button>
                <Link to="/signup" className="button signup">
                  SignUp
                </Link>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Login
