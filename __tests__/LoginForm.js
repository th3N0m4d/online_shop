import React from 'react'
import { shallow } from 'enzyme'

import LoginForm from '@/components/Auth/LoginForm'
import { triggerOnSubmit, triggerOnChange } from '@/utilities/helpers'

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

  it.each`
    name              | value
    ${'username'}     | ${'John Doe'}
    ${'password'}     | ${'1234'}
    ${'keepLoggedIn'} | ${true}
  
    `('should trigger onChange callback for field "$name" with "$value"',
    ({ name, value }) => {
      const onChangeSpy = jest.fn()
      const wrapper = shallow(
        <LoginForm onChange={onChangeSpy} />
      )

      const expectedParams = {
        target: {
          name,
          value
        }
      }

      const form = wrapper.find('form')

      triggerOnChange(form)({ name, value })

      expect(onChangeSpy).toHaveBeenCalledWith(expectedParams)
    })
})
