/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const BreadCrumb = (props) => {
  const { title } = props
  return (
    <div className="breadcrumb mb-0 py-4">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <p className="d-block text-center text-dark mb-0">
              <Link to="/" className="text-dark">
                Home&nbsp;
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
