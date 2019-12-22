import React from 'react'
import { Link } from 'react-router-dom'

import loginImg from '../../img/login.jpg'

import routes from '@/utilities/routes'

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
            <div className='login_form_inner'>
              <h3>Log in to enter</h3>
              <form className='row login_form' action='contact_process.php' method='post' id='contactForm' novalidate='novalidate'>
                <div className='col-md-12 form-group'>
                  <input type='text' className='form-control' id='name' name='name' placeholder='Username' />
                </div>
                <div className='col-md-12 form-group'>
                  <input type='text' className='form-control' id='name' name='name' placeholder='Password' />
                </div>
                <div className='col-md-12 form-group'>
                  <div className='creat_account'>
                    <input type='checkbox' id='f-option2' name='selector' />
                    <label for='f-option2'>Keep me logged in</label>
                  </div>
                </div>
                <div className='col-md-12 form-group'>
                  <button type='submit' value='submit' className='btn submit_btn'>Log In</button>
                  <a href='#'>Forgot Password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Login
