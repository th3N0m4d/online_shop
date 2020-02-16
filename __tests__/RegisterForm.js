import React from 'react'
import { shallow } from 'enzyme'

import RegisterForm from '@/components/Auth/RegisterForm'
import { triggerOnSubmit, triggerOnChange } from '@/utilities/helpers'

describe('RegisterForm', () => {
  it('should render', () => {
    const wrapper = shallow(
      <RegisterForm />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should trigger form submit', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(
      <RegisterForm onSubmit={onSubmitSpy} />
    )

    const form = wrapper.find('form')

    triggerOnSubmit(form)

    expect(onSubmitSpy).toHaveBeenCalled()
  })

  it.each`
    name            | value
    ${'name'}            | ${'John Doe'} 
    ${'email'}           | ${'john@gmail.com'}
    ${'password'}        | ${'1234'}
    ${'password2'}       | ${'1234'}
    ${'keepLoggedIn'}    | ${true} 
  
  `('should trigger onChange callback for field "$name" with "$value"',
    ({ name, value }) => {
      const onChangeSpy = jest.fn()
      const wrapper = shallow(
        <RegisterForm onChange={onChangeSpy} />
      )
      const expectedParams = {
        target: {
          name,
          value
        }
      }

      const form = wrapper.find('form')

      triggerOnChange(form)({ name, value })

      expect(onChangeSpy).toHaveBeenLastCalledWith(expectedParams)
    })
})
