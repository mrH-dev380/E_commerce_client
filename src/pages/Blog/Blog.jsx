import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './Blog.css'
import noResult from '../../assets/images/no-result-found.png'
import BlogCard from '~/components/BlogCard'
import Container from '~/components/Container'
import { getAllBlog } from '~/features/blog/blogSlice'

const Blog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (blogState.length === 0) dispatch(getAllBlog())
  }, [])

  const blogState = useSelector((state) => state.blog.blogs)

  return (
    <>
      <Container title="Blogs" className="blog-wrapper">
        <div className="col-3">
          <div className="filter-card mb-3">
            <h3 className="filter-title">Find By Categories</h3>
            <div>
              <ul className="ps-0 mb-0">
                <li>Watch</li>
                <li>Tv</li>
                <li>Camera</li>
                <li>Laptop</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            {blogState.length === 0 && (
              <div className="no-result-found">
                <img src={noResult} alt="" />
              </div>
            )}
            <div className="mb-3">
              <BlogCard data={blogState} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog
