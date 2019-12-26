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

    const wrapper = shallow(
      <Banner {...props} />
    )

    const pageLinks = wrapper.find('.page_link')
    const firstLink = pageLinks.find('a').first()
    const secondLink = pageLinks.find('a').last()

    expect(pageLinks.children()).toHaveLength(2)
    expect(firstLink.text()).toEqual('Home')
    expect(firstLink.prop('href')).toEqual('/')
    expect(secondLink.text()).toEqual('Help')
    expect(secondLink.prop('href')).toEqual('/help')
  })
})
