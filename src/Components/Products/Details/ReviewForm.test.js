import React from 'react'
import { shallow } from 'enzyme'

import ReviewForm from './ReviewForm'

describe('ReviewForm', () => {
  test('should render', () => {
    const wrapper = shallow(
      <ReviewForm />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  test('should submit form/s content', () => {
    const onSubmitSpy = jest.fn()
    const formData = {
      name: 'John Doe',
      email: 'john@email.com',
      phoneNumber: '123-123-123',
      message: 'Hello world!',
      stars: 2
    }
    const once = 1

    const wrapper = shallow(
      <ReviewForm onSubmit={onSubmitSpy} />
    )

    const form = wrapper.find('form')

    form.find('input[name="name"]').simulate('change', { target: { value: 'John Doe', name: 'name' } })
    form.find('input[name="email"]').simulate('change', { target: { value: 'john@email.com', name: 'email' } })
    form.find('input[name="phoneNumber"]').simulate('change', { target: { value: '123-123-123', name: 'phoneNumber' } })
    form.find('textarea[name="message"]').simulate('change', { target: { value: 'Hello world!', name: 'message' } })
    wrapper.find('li[id=2]').simulate('click', { target: { id: 2 } })

    form.simulate('submit', { preventDefault: () => undefined })

    expect(onSubmitSpy).toHaveBeenCalledTimes(once)
    expect(onSubmitSpy).toHaveBeenCalledWith(formData)
  })
})
