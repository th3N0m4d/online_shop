import React from 'react'
import { shallow } from 'enzyme'

import Home from '.'

describe('Home', () => {
    it('should render', () => {
        const wrapper = shallow(<Home />)

        expect(wrapper.exists()).toBeTruthy()
    });
});

