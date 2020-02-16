import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '@/components/Auth/LoginForm'

describe('LoginForm', () => {
  it('should render', () => {
    const wrapper = shallow(
      <LoginForm />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should trigger onSubmit callback', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(
      <LoginForm onSubmit={onSubmitSpy} />
    )

    const form = wrapper.find('form')

    triggerOnSubmit(form)

    expect(onSubmitSpy).toHaveBeenCalled()
  })

  it('should trigger onChange callback', () => {
    const onChangeSpy = jest.fn()
    const wrapper = shallow(
      <LoginForm onChange={onChangeSpy} />
    )

    const form = wrapper.find('form')

    form.find('input[name="username"]').simulate('change', { target: { value: 'John Doe', name: 'username' } })

    expect(onChangeSpy).toHaveBeenCalled()
  })

  const triggerOnSubmit = form => {
    form.simulate('submit', { preventDefault: () => undefined })
  }
})
