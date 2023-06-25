import './Login.css'
import Meta from '~/components/Meta'
import BreadCrumb from '~/components/BreadCrumb'

const Login = () => {
  return (
    <>
      <Meta title={'Login'} />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xl"></div>
      </div>
    </>
  )
}

export default Login
