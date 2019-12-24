import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onSubmit: PropTypes.func
}

const MAX_RATING = 5

class ReviewForm extends PureComponent {
  state = {
    stars: -1,
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

  handleRating = stars => {
    this.setState({
      stars
    })
  }

  render () {
    return (
      <div className='review_box'>
        <h4>Add a Review</h4>
        <p>Your Rating:</p>
        <ul className='list'>
          {
            [1, 2, 3, 4, 5].map((stars, index) => (
              <li key={index} id={stars} onClick={() => this.handleRating(stars)}>
                {
                  stars <= this.state.stars
                    ? <i className='fa fa-star' style={{ color: '#fbd600' }} />
                    : <i className='far fa-star' style={{ color: '#fbd600' }} />
                }
              </li>
            ))
          }
        </ul>
        {
          this.state.stars === MAX_RATING && <p>Outstanding</p>
        }
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
