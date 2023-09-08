import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import './Contact.css'
import Container from '~/components/Container'
import CustomInput from '~/components/CustomInput'
import { postQuery } from '../../features/contact/contactSlice'

const Contact = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
      mobile: Yup.string()
        .matches(
          /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
          'Mobile Phone must be numeric'
        )
        .min(10, 'Mobile phone must be 10 characters long')
        .required('Mobile Phone is Required'),
      comment: Yup.string().required('Comment is required'),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values))
      dispatch(postQuery(values))
      toast.success('Send Contact Successfully!')
      formik.resetForm()
    },
  })

  return (
    <>
      <Container title="Contact" className="contact-wrapper">
        <div className="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.830786098617!2d106.66845454835192!3d10.776214263588452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edddb818ebf%3A0xfc8c05045f47a3d8!2zVHJ1bmcgVMOibSBUaMawxqFuZyBN4bqhaSBW4bqhbiBI4bqhbmg!5e0!3m2!1svi!2s!4v1687698199533!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: '0', width: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between">
            <div>
              <h3 className="contact-title mb-4">Contact</h3>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex flex-column gap-15"
              >
                <div className="contact-form">
                  <CustomInput
                    type="text"
                    label="Name"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange('name')}
                    onBlur={formik.handleBlur('name')}
                  />
                  <div className="error">
                    {formik.touched.name && formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                  </div>
                </div>
                <div className="contact-form">
                  <CustomInput
                    type="text"
                    label="Email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange('email')}
                    onBlur={formik.handleBlur('email')}
                  />
                  <div className="error">
                    {formik.touched.email && formik.errors.email ? (
                      <div>{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>
                <div className="contact-form">
                  <CustomInput
                    type="text"
                    label="Mobile phone"
                    id="mobile"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange('mobile')}
                    onBlur={formik.handleBlur('mobile')}
                  />
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div>{formik.errors.mobile}</div>
                    ) : null}
                  </div>
                </div>
                <div className="contact-form">
                  <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="4"
                    value={formik.values.comment}
                    onChange={formik.handleChange('comment')}
                    onBlur={formik.handleBlur('comment')}
                    className="w-100 form-control"
                    placeholder="Comment"
                  />
                  <div className="error">
                    {formik.touched.comment && formik.errors.comment ? (
                      <div>{formik.errors.comment}</div>
                    ) : null}
                  </div>
                </div>
                <div>
                  <button type="submit" className="button border-0">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Get in touch with us</h3>
              <div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineHome className="fs-3" />
                    <address className="mb-0">
                      Ho Chi Minh : 41 Quang Trung, Ward 10, Go Vap District
                    </address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiPhoneCall className="fs-3" />
                    <a href="tel:+84 4400 6066">(+84) 4400 6066</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <AiOutlineMail className="fs-3" />
                    <a href="mailto:bwl.official@gmail.com">
                      bwl.official@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-items-center">
                    <BiInfoCircle className="fs-3" />
                    <p className="mb-0 color-black">
                      Monday – Friday 10 AM – 8 PM
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
