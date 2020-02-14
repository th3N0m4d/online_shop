import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import UserRating from '@/components/Products/UserRating'

const propTypes = {
  onSubmit: PropTypes.func
}

class ReviewForm extends PureComponent {
  state = {
    rating: 0,
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    this.props.onSubmit(this.state)
    e.preventDefault()
  }

  handleRating = rating => {
    this.setState({
      rating
    })
  }

  render () {
    return (
      <div className='review_box'>
        <h4>Add a Review</h4>
        <p>Your Rating:</p>
        <UserRating onClick={this.handleRating} rating={this.state.rating} />
        <form className='row contact_form' noValidate onSubmit={this.handleSubmit}>
          <div className='col-md-12'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Your full name'
                onChange={this.handleInput}
                value={this.state.name}
              />
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email Address'
                onChange={this.handleInput}
                value={this.state.email}
              />
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='phoneNumber'
                placeholder='Phone Number'
                onChange={this.handleInput}
                value={this.state.phoneNumber}
              />
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-group'>
              <textarea
                className='form-control'
                name='message'
                rows='1'
                placeholder='Review'
                onChange={this.handleInput}
                value={this.state.message}
              />
            </div>
          </div>
          <div className='col-md-12 text-right'>
            <button type='submit' value='submit' className='btn submit_btn'>Submit Now</button>
          </div>
        </form>
      </div>
    )
  }
}

ReviewForm.propTypes = propTypes

export default ReviewForm
