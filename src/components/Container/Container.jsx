/* eslint-disable react/prop-types */
import Meta from '~/components/Meta'
import BreadCrumb from '~/components/BreadCrumb'

const Container = (props) => {
  return (
    <>
      <Meta title={`${props.title}`} />
      <BreadCrumb title={props.title} back={props.back} />
      <section className={`${props.className} home-wrapper-2 py-5`}>
        <div className="container-xl">
          <div className="row">{props.children}</div>
        </div>
      </section>
    </>
  )
}

export default Container
