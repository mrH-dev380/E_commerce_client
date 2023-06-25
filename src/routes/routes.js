import config from '~/config'

// Pages
import Home from '~/pages/Home'
import About from '~/pages/About'
import Contact from '~/pages/Contact'
import OurStore from '~/pages/OurStore'
import Blog from '~/pages/Blog'
import CompareProduct from '~/pages/CompareProduct'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.about, component: About },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.ourStore, component: OurStore },
  { path: config.routes.blogs, component: Blog },
  { path: config.routes.compareProduct, component: CompareProduct },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
