import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import routes from '@/utilities/routes'

const propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

const LoginForm = ({ onSubmit, onChange }) => (
  <div className='login_form_inner'>
    <h3>Log in to enter</h3>
    <form className='row login_form' noValidate onSubmit={onSubmit}>
      <div className='col-md-12 form-group'>
        <input type='text' className='form-control' name='username' placeholder='Username' onChange={onChange} />
      </div>
      <div className='col-md-12 form-group'>
        <input type='text' className='form-control' name='password' placeholder='Password' onChange={onChange} />
      </div>
      <div className='col-md-12 form-group'>
        <div className='creat_account'>
          <input type='checkbox' id='f-option2' name='keepLoggedIn' onChange={onChange} />
          <label htmlFor='f-option2'>Keep me logged in</label>
        </div>
      </div>
      <div className='col-md-12 form-group'>
        <button type='submit' value='submit' className='btn submit_btn'>Log In</button>
        <Link to={routes.passwordRecovery}>Forgot Password?</Link>
      </div>
    </form>
  </div>
)

LoginForm.propTypes = propTypes

export default LoginForm
