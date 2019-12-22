import React from 'react'
import { shallow } from 'enzyme'

import FeaturedProduct from '.'

describe('FeaturedProduct', () => {
  const product = {
    id: 1,
    title: 'Faded SkyBlu Denim Jeans',
    price: 149.99
  }

  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <FeaturedProduct {...product} />
    )
  })

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })
})
