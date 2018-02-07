import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import AuralStatus from './aural-status'

describe('<AuralStatus />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<AuralStatus />)
  })

  it('should render auralStatus as a prop', () => {
    const wrapper = shallow(<AuralStatus auralStatus="Aural Status" />)
    expect(wrapper.find('p.visuallyhidden').text()).toEqual('Aural Status')
  })
})
