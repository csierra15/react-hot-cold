import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import StatusSection from './status-section'

describe('<StatusSection />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<StatusSection guesses={[]} />)
  })
})
