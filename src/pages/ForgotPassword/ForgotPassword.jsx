import './ForgotPassword.css'
import Container from '~/components/Container'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <Container title="Forgot Password" back="login" className="login-wrapper">
        <div className="col-12">
          <div className="auth-card">
            <h3 className="text-center mb-3">Reset Your Password</h3>
            <p className="text-center mt-2 mb-3">
              We will send you an email to reset your password
            </p>
            <form action="" className="d-flex flex-column gap-15">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
              />

              <div>
                <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Submit
                  </button>
                  <Link to="/login" className="cancel">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  )
}

export default ForgotPassword
