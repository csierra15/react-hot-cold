import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import Feedback from './feedback'

describe('<Feedback />', () => {
  it('should render without crashing - smoke test', () => {
    shallow(<Feedback />)
  })

  it('should render feedback as a prop', () => {
    const wrapper = shallow(<Feedback feedback='Guess again!' />)
    expect(wrapper.find('h2').text())
  })
})
