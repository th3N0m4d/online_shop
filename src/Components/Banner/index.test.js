import React from 'react'
import { shallow } from 'enzyme'

import Banner from '.'

describe('Banner', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Banner />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render banner content', () => {
    const props = {
      header: 'Hello world'
    }
    const wrapper = shallow(
      <Banner {...props} />
    )

    const headerContent = wrapper.find('h2')

    expect(headerContent.text()).toEqual(props.header)
  })
})
