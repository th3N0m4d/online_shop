import React from 'react'
import { Link } from 'react-router-dom'

import loginImg from '../../img/login.jpg'
import routes from '@/utilities/routes'
import RegisterForm from './RegisterForm'

const Register = () => (
  <>
    <section className='banner_area'>
      <div className='banner_inner d-flex align-items-center'>
        <div className='container'>
          <div className='banner_content text-center'>
            <h2>Login/Register</h2>
            <div className='page_link'>
              <Link to={routes.home}>Home</Link>
              <Link to={routes.register}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
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
