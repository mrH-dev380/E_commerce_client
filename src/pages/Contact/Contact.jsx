import Container from '~/components/Container'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiInfoCircle } from 'react-icons/bi'
import './Contact.css'

const Contact = () => {
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
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                  ></textarea>
                </div>
                <div>
                  <button className="button border-0">Submit</button>
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
