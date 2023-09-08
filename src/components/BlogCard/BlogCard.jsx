/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'
import moment from 'moment'

import './BlogCard.css'
import noImage from '../../assets/images/noimage.png'

const BlogCard = (props) => {
  let location = useLocation()
  const { data, grid } = props

  let blogData = []

  if (location.pathname === '/') {
    blogData = data.slice(0, 4)
  } else {
    blogData = data
  }
  const col = !!grid

  return (
    <div className="row gap-15">
      {blogData?.map((blog, index) => {
        return (
          <div
            key={index}
            className={`blog-card ${col ? `gr-${grid}` : 'col-6'}`}
          >
            <div className="card-image">
              <img
                src={blog.images[0] || noImage}
                className="img-fluid w-100"
                alt="blog"
              />
            </div>
            <div className="blog-content">
              <p className="date">
                {moment(blog.createdAt).format('MMMM Do YYYY, h:mm a')}
              </p>
              <h5 className="title">{blog.title}</h5>
              <div
                className="desc"
                dangerouslySetInnerHTML={{ __html: blog?.description }}
              ></div>
              <Link
                to={{ pathname: `/blog/${blog.title}` }}
                state={{ blogId: blog._id }}
                className="button mt-3"
              >
                Read More
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BlogCard
