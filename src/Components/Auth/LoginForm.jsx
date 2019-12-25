import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onSubmit: PropTypes.func
}

class LoginForm extends PureComponent {
  state = {
    username: '',
    password: '',
    keepLoggedIn: false
  }

  handleOnInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    this.props.onSubmit(this.state)
    e.preventDefault()
  }

  render () {
    return (
      <div className='login_form_inner'>
        <h3>Log in to enter</h3>
        <form className='row login_form' noValidate onSubmit={this.handleOnSubmit}>
          <div className='col-md-12 form-group'>
            <input type='text' className='form-control' name='username' placeholder='Username' onChange={this.handleOnInput} />
          </div>
          <div className='col-md-12 form-group'>
            <input type='text' className='form-control' name='password' placeholder='Password' onChange={this.handleOnInput} />
          </div>
          <div className='col-md-12 form-group'>
            <div className='creat_account'>
              <input type='checkbox' id='f-option2' name='keepLoggedIn' onChange={this.handleOnInput} />
              <label htmlFor='f-option2'>Keep me logged in</label>
            </div>
          </div>
          <div className='col-md-12 form-group'>
            <button type='submit' value='submit' className='btn submit_btn'>Log In</button>
            <a href='/'>Forgot Password?</a>
          </div>
        </form>
      </div>
    )
  }
}

LoginForm.propTypes = propTypes

export default LoginForm
