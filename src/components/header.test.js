import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import Header from './header'

describe('<Header />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<Header />)
  })
})
