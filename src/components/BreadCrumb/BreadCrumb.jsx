/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  const { title, back } = props
  let path
  let titleBack

  switch (back) {
    case 'login':
      path = '/login'
      titleBack = 'Login'
      break
    case 'blogs':
      path = '/blogs'
      titleBack = 'Blog'
      break
    case 'product':
      path = '/product'
      titleBack = 'Product'
      break
    default:
      path = '/'
      titleBack = 'Home'
  }

  return (
    <div className="breadcrumb mb-0 py-4">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <p className="d-block text-center text-dark mb-0">
              <Link to={path} className="text-dark">
                {titleBack}&nbsp;
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
