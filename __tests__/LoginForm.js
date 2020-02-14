import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '@/components/Auth/LoginForm'

describe('LoginForm', () => {
  test('should render', () => {
    const wrapper = shallow(
      <LoginForm />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  test('should trigger onSubmit', () => {
    const onSubmitSpy = jest.fn()
    const once = 1
    const formData = {
      username: 'John Doe',
      password: '1234',
      keepLoggedIn: true
    }
    const wrapper = shallow(
      <LoginForm onSubmit={onSubmitSpy} />
    )

    const form = wrapper.find('form')

    form.find('input[name="username"]').simulate('change', { target: { value: 'John Doe', name: 'username' } })
    form.find('input[name="password"]').simulate('change', { target: { value: '1234', name: 'password' } })
    form.find('input[name="keepLoggedIn"]').simulate('change', { target: { value: true, name: 'keepLoggedIn' } })
    form.simulate('submit', { preventDefault: () => undefined })

    expect(onSubmitSpy).toHaveBeenCalledTimes(once)
    expect(onSubmitSpy).toHaveBeenCalledWith(formData)
  })
})
