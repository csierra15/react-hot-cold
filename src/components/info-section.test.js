import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import InfoSection from './info-section'

describe('<InfoSection />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<InfoSection />)
  })
})
