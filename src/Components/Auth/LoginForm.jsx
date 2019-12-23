import React from 'react'

const LoginForm = () => (
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
)

export default LoginForm
