import config from '~/config'

// Pages
import Home from '~/pages/Home'
import About from '~/pages/About'
import Contact from '~/pages/Contact'
import OurStore from '~/pages/OurStore'
import Blog from '~/pages/Blog'
import CompareProduct from '~/pages/CompareProduct'
import Wishlist from '~/pages/Wishlist'
import Cart from '~/pages/Cart'
import Login from '~/pages/Login'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.about, component: About },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.ourStore, component: OurStore },
  { path: config.routes.blogs, component: Blog },
  { path: config.routes.compareProduct, component: CompareProduct },
  { path: config.routes.wishlist, component: Wishlist },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.login, component: Login },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
