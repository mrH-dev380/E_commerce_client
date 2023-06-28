import './Login.css'
import Container from '~/components/Container'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Container title="Login" className="login-wrapper">
        <div className="auth-card">
          <h3 className="text-center pb-3">Login</h3>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div>
            <Link to="/forgot-password" className="forgot-password">
              Forgot Password?
            </Link>

            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
              <button className="button border-0" type="submit">
                Login
              </button>
              <Link to="/signup" className="button signup">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login
