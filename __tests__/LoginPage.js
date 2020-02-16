import React from 'react'
import { shallow } from 'enzyme'

import LoginPage from '@/components/Auth/LoginPage'
import LoginForm from '@/components/Auth/LoginForm'

describe('LoginPage', () => {
  it('should render', () => {
    const wrapper = shallow(
      <LoginPage />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should initialize LoginForm with callback handlers', () => {
    const wrapper = shallow(
      <LoginPage />
    )

    const form = wrapper.find(LoginForm)

    expect(form.prop('onChange')).toBeInstanceOf(Function)
    expect(form.prop('onSubmit')).toBeInstanceOf(Function)
  })
})
