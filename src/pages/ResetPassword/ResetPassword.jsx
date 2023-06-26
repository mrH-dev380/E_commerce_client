import './ResetPassword.css'
import Meta from '~/components/Meta'
import BreadCrumb from '~/components/BreadCrumb'

const ResetPassword = () => {
  return (
    <>
      <Meta title={'ResetPassword'} />
      <BreadCrumb title="ResetPassword" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
