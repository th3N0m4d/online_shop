import React from 'react'
import { Link } from 'react-router-dom'

import loginImg from '../../img/login.jpg'

import routes from '@/utilities/routes'
import LoginForm from './LoginForm'

const Login = () => (
  <>
    <section className='banner_area'>
      <div className='banner_inner d-flex align-items-center'>
        <div className='container'>
          <div className='banner_content text-center'>
            <h2>Login/Register</h2>
            <div className='page_link'>
              <Link to={routes.home}>Home</Link>
              <Link to={routes.login}>Login</Link>
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
                <h4>New to our website?</h4>
                <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                <Link className='main_btn' to={routes.register}>Create an Account</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Login
