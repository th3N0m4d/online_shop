import React from 'react'

const RegisterForm = () => (
  <div className='login_form_inner reg_form'>
    <h3>Create an Account</h3>
    <form className='row login_form' action='contact_process.php' method='post' id='contactForm' novalidate='novalidate'>
      <div className='col-md-12 form-group'>
        <input type='text' className='form-control' id='name' name='name' placeholder='Name' />
      </div>
      <div className='col-md-12 form-group'>
        <input type='email' className='form-control' id='email' name='email' placeholder='Email Address' />
      </div>
      <div className='col-md-12 form-group'>
        <input type='text' className='form-control' id='password' name='password' placeholder='Password' />
      </div>
      <div className='col-md-12 form-group'>
        <input type='password' className='form-control' id='pass' name='pass' placeholder='Confirm password' />
      </div>
      <div className='col-md-12 form-group'>
        <div className='creat_account'>
          <input type='checkbox' id='f-option2' name='selector' />
          <label for='f-option2'>Keep me logged in</label>
        </div>
      </div>
      <div className='col-md-12 form-group'>
        <button type='submit' value='submit' className='btn submit_btn'>Register</button>
      </div>
    </form>
  </div>
)

export default RegisterForm
