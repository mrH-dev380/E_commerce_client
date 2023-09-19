import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useThrottle } from '@uidotdev/usehooks'
import { BsArrowUpSquareFill } from 'react-icons/bs'

import './Blog.css'
import noResult from '../../assets/images/no-result-found.png'
import BlogCard from '~/components/BlogCard'
import Container from '~/components/Container'
import { getAllBlog, getMoreBlog } from '~/features/blog/blogSlice'

const Blog = () => {
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const [windowScroll, setWindowScroll] = useState(0)
  const debouncedValue = useThrottle(windowScroll, 1000)

  const blog = document.querySelector('.blog-card')
  const blogHeight = blog?.offsetHeight

  useEffect(() => {
    if (blogState.length === 0) dispatch(getAllBlog())
  }, [])

  const blogState = useSelector((state) => state.blog.blogs)
  window.addEventListener(
    'scroll',
    () => {
      setWindowScroll(Math.round(scrollY))
    },
    { passive: true }
  )

  const handleLoadNews = () => {
    setPage((prev) => prev + 1)
    dispatch(getMoreBlog({ page: page + 1 }))
  }

  useEffect(() => {
    const blogLength = blogState.length / 3 - 1
    // Header to news + news height + gap
    const isLoading = 230 + blogLength * blogHeight + 16 * blogLength
    if (debouncedValue > isLoading) {
      handleLoadNews()
    }
  }, [debouncedValue])

  const backToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Container title="Blogs" className="blog-wrapper">
        <div className="col-12">
          <div className="row">
            {blogState.length === 0 && (
              <div className="no-result-found">
                <img src={noResult} alt="" />
              </div>
            )}
            <div className="mb-3">
              <BlogCard data={blogState} grid={4} />
            </div>
          </div>
        </div>
      </Container>
      <div
        className="scroll-to-top"
        style={{ display: windowScroll > 800 ? 'block' : 'none' }}
        onClick={backToTop}
      >
        <BsArrowUpSquareFill />
      </div>
    </>
  )
}

export default Blog
