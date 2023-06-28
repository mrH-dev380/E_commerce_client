import './ResetPassword.css'
import Container from '~/components/Container'

const ResetPassword = () => {
  return (
    <>
      <Container title="ResetPassword" className="login-wrapper">
        <div className="auth-card">
          <h3 className="text-center mb-3">Reset Password</h3>
          <form action="" className="d-flex flex-column">
            <input
              className="form-control"
              type="password"
              name="newPassword"
              placeholder="New Password"
            />
            <input
              className="form-control"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
            <div>
              <div className="my-3 d-flex justify-content-center gap-15 align-items-center">
                <button className="button border-0">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  )
}

export default ResetPassword
