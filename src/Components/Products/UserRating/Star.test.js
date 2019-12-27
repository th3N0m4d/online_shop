import React from 'react'
import { shallow } from 'enzyme'

import Star, { StarIcon } from './Star'

describe('Star', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Star />
    )

    const starIcon = wrapper.find(StarIcon)

    expect(wrapper.exists()).toBeTruthy()
    expect(starIcon.prop('selected')).toBeFalsy()
  })

  it('should render Star as selected', () => {
    const wrapper = shallow(
      <Star selected />
    )

    const starIcon = wrapper.find(StarIcon)

    expect(starIcon.prop('selected')).toBeTruthy()
  })

  it('should trigger onClick with selected id', () => {
    const onClickSpy = jest.fn()
    const props = {
      id: 7,
      onClick: onClickSpy
    }
    const wrapper = shallow(
      <Star {...props} />
    )

    wrapper.simulate('click')

    expect(onClickSpy).toHaveBeenLastCalledWith(props.id)
  })
})
