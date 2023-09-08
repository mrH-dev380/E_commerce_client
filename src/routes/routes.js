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
import CheckOut from '~/pages/CheckOut'
import Order from '~/pages/Order'
import Login from '~/pages/Login'
import SignUp from '~/pages/SignUp'
import ForgotPassword from '~/pages/ForgotPassword'
import ResetPassword from '~/pages/ResetPassword'
import PrivacyPolicy from '~/pages/PrivacyPolicy'
import RefundPolicy from '~/pages/RefundPolicy'
import ShippingPolicy from '~/pages/ShippingPolicy'
import TermAndConditions from '~/pages/TermAndConditions'
import UserInfo from '~/pages/UserInfo'

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
  { path: config.routes.checkOut, component: CheckOut },
  { path: config.routes.orders, component: Order },
  { path: config.routes.login, component: Login },
  { path: config.routes.signup, component: SignUp },
  { path: config.routes.forgotPassword, component: ForgotPassword },
  { path: config.routes.resetPassword, component: ResetPassword },
  { path: config.routes.privacyPolicy, component: PrivacyPolicy },
  { path: config.routes.refundPolicy, component: RefundPolicy },
  { path: config.routes.shippingPolicy, component: ShippingPolicy },
  { path: config.routes.termAndConditions, component: TermAndConditions },
  { path: config.routes.information, component: UserInfo },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
