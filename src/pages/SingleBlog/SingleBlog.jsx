import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import './SingleBlog.css'
import Container from '~/components/Container'
import noImage from '../../assets/images/noimage.png'
import { getBlogById } from '../../features/blog/blogSlice'

const SingleBlog = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const { blogId } = location.state

  useEffect(() => {
    if (blogId !== undefined) {
      dispatch(getBlogById(blogId))
    }
  }, [])

  const blogData = useSelector((state) => state.blog)

  const { blogTitle, blogDescription, blogImages } = blogData

  return (
    <>
      <Container title={blogTitle} back="blogs" className="blog-wrapper">
        <div className="col-12">
          <div className="single-blog-card">
            <Link to="/blogs" className="d-flex align-items-center gap-10 pb-5">
              <HiOutlineArrowLeft className="fs-4" /> Go back to Blogs
            </Link>
            <h3 className="title">{blogTitle}</h3>
            <div className="img-fluid my-4">
              <img
                src={noImage || blogImages}
                alt="blog"
                style={{ width: '60%' }}
              />
            </div>
            <div dangerouslySetInnerHTML={{ __html: blogDescription }}></div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default SingleBlog
