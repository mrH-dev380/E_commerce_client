import './Blog.css'
import BlogCard from '~/components/BlogCard'

import Container from '~/components/Container'

const Blog = () => {
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
            <div className="col-6 mb-3">
              <BlogCard />
            </div>
            <div className="col-6 mb-3">
              <BlogCard />
            </div>
            <div className="col-6 mb-3">
              <BlogCard />
            </div>
            <div className="col-6 mb-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blog
