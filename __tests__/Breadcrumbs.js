import React from 'react'
import { shallow, mount } from 'enzyme'
import { BrowserRouter, Link } from 'react-router-dom'

import Breadcrumbs from '@/components/Banner/Breadcrumbs'

describe('Breadcrumbs', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Breadcrumbs />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should render page links', () => {
    const props = {
      pageLinks: [
        {
          name: 'Home',
          route: '/'
        },
        {
          name: 'Help',
          route: '/help'
        }
      ]
    }

    const wrapper = mount(
      <BrowserRouter>
        <Breadcrumbs {...props} />
      </BrowserRouter>
    )

    const firstLink = wrapper.find(Link).first()
    const secondLink = wrapper.find(Link).last()

    expect(firstLink.text()).toEqual('Home')
    expect(firstLink.prop('to')).toEqual('/')
    expect(secondLink.text()).toEqual('Help')
    expect(secondLink.prop('to')).toEqual('/help')
  })
})
