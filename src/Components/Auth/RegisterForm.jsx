import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
}

const RegisterForm = ({ onChange, onSubmit }) => (
  <div className='login_form_inner reg_form'>
    <h3>Create an Account</h3>
    <form className='row login_form' noValidate onSubmit={onSubmit}>
      <div className='col-md-12 form-group'>
        <input type='text' className='form-control' id='name' name='name' placeholder='Name' onChange={onChange} />
      </div>
      <div className='col-md-12 form-group'>
        <input type='email' className='form-control' id='email' name='email' placeholder='Email Address' onChange={onChange} />
      </div>
      <div className='col-md-12 form-group'>
        <input type='text' className='form-control' id='password' name='password' placeholder='Password' onChange={onChange} />
      </div>
      <div className='col-md-12 form-group'>
        <input type='password' className='form-control' id='password2' name='password2' placeholder='Confirm password' onChange={onChange} />
      </div>
      <div className='col-md-12 form-group'>
        <div className='creat_account'>
          <input type='checkbox' id='keepLoggedIn' name='keepLoggedIn' onChange={onChange} />
          <label htmlFor='keepLoggedIn'>Keep me logged in</label>
        </div>
      </div>
      <div className='col-md-12 form-group'>
        <button type='submit' value='submit' className='btn submit_btn'>Register</button>
      </div>
    </form>
  </div>
)

RegisterForm.propTypes = propTypes

export default RegisterForm
