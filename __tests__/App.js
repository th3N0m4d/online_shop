import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

import App from '@/components/App'
import routes from '@/utilities/routes'

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.exists()).toBeTruthy()
  })

  it.each`
    route                     | componentName 
    ${routes.login}           | ${'Login'}    
    ${routes.register}        | ${'Register'}
    ${routes.contact}         | ${'ContactUs'}
    ${routes.productDetails}  | ${'ProductDetails'}
    ${routes.home}            | ${'Home'}
  
  `('should render $componentName for route "$route"',
    ({ route, componentName }) => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      )

      const componentPage = wrapper.find(componentName)

      expect(componentPage.exists()).toBeTruthy()
    })
})
