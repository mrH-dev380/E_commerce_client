import './Wishlist.css'
import Meta from '~/components/Meta'
import BreadCrumb from '~/components/BreadCrumb'

const Wishlist = () => {
  return (
    <>
      <Meta title={'Wishlist'} />
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xl"></div>
      </div>
    </>
  )
}

export default Wishlist
