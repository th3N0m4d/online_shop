import React from 'react'
import { Link } from 'react-router-dom'

import loginImg from 'images/login.jpg'
import routes from '@/utilities/routes'
import RegisterForm from './RegisterForm'

import Banner from '@/components/Banner'

const pageLinks = [
  {
    name: 'Home',
    route: routes.home
  },
  {
    name: 'Register',
    route: routes.register
  }
]

const Register = () => (
  <>
    <Banner header='Login/Register' pageLinks={pageLinks} />
    <section className='login_box_area p_120'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='login_box_img'>
              <img className='img-fluid' src={loginImg} alt='' />
              <div className='hover'>
                <h4>Already a registered user?</h4>
                <p>Click the button below to log in</p>
                <Link className='main_btn' to={routes.login}>Login</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Register
