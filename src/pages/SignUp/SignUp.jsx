import './SignUp.css'
import Meta from '~/components/Meta'
import BreadCrumb from '~/components/BreadCrumb'

const SignUp = () => {
  return (
    <>
      <Meta title={'SignUp'} />
      <BreadCrumb title="SignUp" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
