import React from 'react'
import { shallow } from 'enzyme'

import Login from '@/components/Auth/Login'

describe('Login', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Login />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})
