import React from 'react'
import { shallow } from 'enzyme'
import RegisterForm from './RegisterForm'
import * as R from 'ramda'

describe('RegisterForm', () => {
  it('should render', () => {
    const wrapper = shallow(
      <RegisterForm />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should trigger form submit', () => {
    const onSubmitSpy = jest.fn()
    const once = 1
    const wrapper = shallow(
      <RegisterForm onSubmit={onSubmitSpy} />
    )

    wrapper.find('form').simulate('submit', { preventDefault: R.always(undefined) })

    expect(onSubmitSpy).toHaveBeenCalled()
    expect(onSubmitSpy).toHaveBeenCalledTimes(once)
  })

  it('should submit form data', () => {
    const onSubmitSpy = jest.fn()
    const formData = {
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '1234',
      password2: '1234',
      keepLoggedIn: true
    }
    const wrapper = shallow(
      <RegisterForm onSubmit={onSubmitSpy} />
    )

    wrapper.find('input[name="name"]').simulate('change', { target: { value: 'John Doe', name: 'name' } })
    wrapper.find('input[name="email"]').simulate('change', { target: { value: 'john@gmail.com', name: 'email' } })
    wrapper.find('input[name="password"]').simulate('change', { target: { value: '1234', name: 'password' } })
    wrapper.find('input[name="password2"]').simulate('change', { target: { value: '1234', name: 'password2' } })
    wrapper.find('input[name="keepLoggedIn"]').simulate('change', { target: { value: true, name: 'keepLoggedIn' } })
    wrapper.find('form').simulate('submit', { preventDefault: R.always(undefined) })

    expect(onSubmitSpy).toHaveBeenLastCalledWith(formData)
  })

  it('should not register new user when password does not match', () => {
    const onSubmitSpy = jest.fn()

    const wrapper = shallow(
      <RegisterForm onSubmit={onSubmitSpy} />
    )

    wrapper.find('input[name="name"]').simulate('change', { target: { value: 'John Doe', name: 'name' } })
    wrapper.find('input[name="email"]').simulate('change', { target: { value: 'john@gmail.com', name: 'email' } })
    wrapper.find('input[name="password"]').simulate('change', { target: { value: '1234', name: 'password' } })
    wrapper.find('input[name="password2"]').simulate('change', { target: { value: '12345', name: 'password2' } })
    wrapper.find('input[name="keepLoggedIn"]').simulate('change', { target: { value: true, name: 'keepLoggedIn' } })
    wrapper.find('form').simulate('submit', { preventDefault: R.always(undefined) })

    expect(onSubmitSpy).not.toHaveBeenCalled()
  })
})
