import React from 'react'
import { shallow } from 'enzyme'

import HeaderTop from '.'

describe('HeaderTop', () => {
  it('should render', () => {
    const wrapper = shallow(
      <HeaderTop />
    )

    expect(wrapper.exists()).toBeTruthy()
  })
})
