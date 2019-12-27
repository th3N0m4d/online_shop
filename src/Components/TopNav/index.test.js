import React from 'react'
import { shallow } from 'enzyme'

import TopNav from '.'
import { ToggleTopNavButton, NavMenu } from './Atoms'

const resizeWindow = (x, y) => {
  window.innerWidth = x
  window.innerHeight = y
  window.dispatchEvent(new Event('resize'))
}

describe('TopNav', () => {
  it('should render', () => {
    const wrapper = shallow(
      <TopNav />
    )
    const navMenu = wrapper.find(NavMenu)

    expect(wrapper.exists()).toBeTruthy()
    expect(navMenu.hasClass('show')).toBeFalsy()
  })

  it('should toggle menu when in mobile mode', () => {
    const onToggleSpy = jest.fn()
    const wrapper = shallow(
      <TopNav onToggle={onToggleSpy} />
    )

    resizeWindow(991, 347)

    const toggleButton = wrapper.find(ToggleTopNavButton)

    toggleButton.simulate('click')

    expect(onToggleSpy).toHaveBeenCalled()
  })

  it('should display menu when on mobile mode', () => {
    const wrapper = shallow(
      <TopNav visible />
    )

    const navMenu = wrapper.find(NavMenu)

    expect(navMenu.hasClass('show')).toBeTruthy()
  })
})
