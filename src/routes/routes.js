import config from '~/config'

// Pages
import Home from '~/pages/Home'
import About from '~/pages/About'
import Contact from '~/pages/Contact'
import OurStore from '~/pages/OurStore'
import SingleProduct from '~/pages/SingleProduct'
import Blog from '~/pages/Blog'
import SingleBlog from '~/pages/SingleBlog'
import CompareProduct from '~/pages/CompareProduct'
import Wishlist from '~/pages/Wishlist'
import Cart from '~/pages/Cart'
import Login from '~/pages/Login'
import SignUp from '~/pages/SignUp'
import ForgotPassword from '~/pages/ForgotPassword'
import ResetPassword from '~/pages/ResetPassword'

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.about, component: About },
  { path: config.routes.contact, component: Contact },
  { path: config.routes.ourStore, component: OurStore },
  { path: config.routes.singleProduct, component: SingleProduct },
  { path: config.routes.blogs, component: Blog },
  { path: config.routes.singleBlog, component: SingleBlog },
  { path: config.routes.compareProduct, component: CompareProduct },
  { path: config.routes.wishlist, component: Wishlist },
  { path: config.routes.cart, component: Cart },
  { path: config.routes.login, component: Login },
  { path: config.routes.signup, component: SignUp },
  { path: config.routes.forgotPassword, component: ForgotPassword },
  { path: config.routes.resetPassword, component: ResetPassword },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
