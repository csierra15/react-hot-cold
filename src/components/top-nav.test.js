import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import TopNav from './top-nav'

describe('<TopNav />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<TopNav />)
  })
})
