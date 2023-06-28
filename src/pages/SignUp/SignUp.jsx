import './SignUp.css'
import Container from '~/components/Container'

const SignUp = () => {
  return (
    <>
      <Container title="SignUp" back="login" className="login-wrapper">
        <div className="auth-card">
          <h3 className="text-center mb-3">Sign Up</h3>
          <form action="" className="d-flex flex-column">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className="form-control"
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
            />
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
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

export default SignUp
