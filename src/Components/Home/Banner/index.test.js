import React from 'react'
import { shallow } from 'enzyme'

import Banner from '.'

describe('Banner', () => {
  it('should render', () => {
    const wrapper = shallow(<Banner />)

    expect(wrapper.exists()).toBeTruthy()
  })
})
