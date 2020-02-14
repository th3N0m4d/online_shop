import React from 'react'
import { shallow } from 'enzyme'

import LoginPage from '@/components/Auth/LoginPage'

describe('LoginPage', () => {
  it('should render', () => {
    const wrapper = shallow(
      <LoginPage />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})
