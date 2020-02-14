import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RegisterForm extends PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    keepLoggedIn: false
  }

  static propTypes = {
    onSubmit: PropTypes.func
  }

  handleOnSubmit = e => {
    if (this.state.password !== this.state.password2) {
      return
    }
    this.props.onSubmit(this.state)
    e.preventDefault()
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='login_form_inner reg_form'>
        <h3>Create an Account</h3>
        <form className='row login_form' noValidate onSubmit={this.handleOnSubmit}>
          <div className='col-md-12 form-group'>
            <input type='text' className='form-control' id='name' name='name' placeholder='Name' onChange={this.handleOnChange} />
          </div>
          <div className='col-md-12 form-group'>
            <input type='email' className='form-control' id='email' name='email' placeholder='Email Address' onChange={this.handleOnChange} />
          </div>
          <div className='col-md-12 form-group'>
            <input type='text' className='form-control' id='password' name='password' placeholder='Password' onChange={this.handleOnChange} />
          </div>
          <div className='col-md-12 form-group'>
            <input type='password' className='form-control' id='password2' name='password2' placeholder='Confirm password' onChange={this.handleOnChange} />
          </div>
          <div className='col-md-12 form-group'>
            <div className='creat_account'>
              <input type='checkbox' id='keepLoggedIn' name='keepLoggedIn' onChange={this.handleOnChange} />
              <label htmlFor='keepLoggedIn'>Keep me logged in</label>
            </div>
          </div>
          <div className='col-md-12 form-group'>
            <button type='submit' value='submit' className='btn submit_btn'>Register</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegisterForm
