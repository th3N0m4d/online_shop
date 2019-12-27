import React from 'react'
import { shallow } from 'enzyme'

import UserRating, { MAX_RATING } from '.'
import { MaxRatingMessage } from './Atoms'
import Star from './Star'

describe('UserRating', () => {
  test('should render', () => {
    const wrapper = shallow(
      <UserRating />
    )

    const message = wrapper.find(MaxRatingMessage)

    expect(wrapper.exists()).toBeTruthy()
    expect(message.exists()).toBeFalsy()
  })

  test('should pass props down to the Star component', () => {
    const onClickSpy = jest.fn()
    const RATING = 1
    const wrapper = shallow(
      <UserRating onClick={onClickSpy} rating={RATING} />
    )

    const selectedRating = wrapper.find(Star).first()

    expect(selectedRating.prop('id')).toBe(1)
    expect(selectedRating.prop('selected')).toBeTruthy()
    expect(selectedRating.prop('onClick')).toBe(onClickSpy)
  })

  test('should display message when user selects max rating', () => {
    const wrapper = shallow(
      <UserRating rating={MAX_RATING} />
    )

    const message = wrapper.find(MaxRatingMessage)

    expect(message.exists()).toBeTruthy()
  })
})
