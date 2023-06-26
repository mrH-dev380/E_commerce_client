import './ForgotPassword.css'
import Meta from '~/components/Meta'
import BreadCrumb from '~/components/BreadCrumb'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
      <Meta title={'Forgot Password'} />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xl">
          <div className="row">
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
                      <Link to="/login" className='cancel'>Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword