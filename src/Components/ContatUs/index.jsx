import React from 'react'
import { Link } from 'react-router-dom'

import routes from '@/utilities/routes'

const ContactUs = () => (
  <>
    <section className='banner_area'>
      <div className='banner_inner d-flex align-items-center'>
        <div className='container'>
          <div className='banner_content text-center'>
            <h2>Contact Us</h2>
            <div className='page_link'>
              <Link to={routes.home}>Home</Link>
              <Link to={routes.contact}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='contact_area p_120'>
      <div className='container'>
        {/* Place google maps here */}
        <div className='row'>
          <div className='col-lg-3'>
            <div className='contact_info'>
              <div className='info_item'>
                <i className='lnr lnr-home' />
                <h6>California, United States</h6>
                <p>Santa monica bullevard</p>
              </div>
              <div className='info_item'>
                <i className='lnr lnr-phone-handset' />
                <h6>
                  <a href='#'>00 (440) 9865 562</a>
                </h6>
                <p>Mon to Fri 9am to 6 pm</p>
              </div>
              <div className='info_item'>
                <i className='lnr lnr-envelope' />
                <h6>
                  <a href='#'>support@colorlib.com</a>
                </h6>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
          <div className='col-lg-9'>
            <form className='row contact_form' action='contact_process.php' method='post' id='contactForm' novalidate='novalidate'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input type='text' className='form-control' id='name' name='name' placeholder='Enter your name' />
                </div>
                <div className='form-group'>
                  <input type='email' className='form-control' id='email' name='email' placeholder='Enter email address' />
                </div>
                <div className='form-group'>
                  <input type='text' className='form-control' id='subject' name='subject' placeholder='Enter Subject' />
                </div>
              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <textarea className='form-control' name='message' id='message' rows='1' placeholder='Enter Message' />
                </div>
              </div>
              <div className='col-md-12 text-right'>
                <button type='submit' value='submit' className='btn submit_btn'>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default ContactUs
