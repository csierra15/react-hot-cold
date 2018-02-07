import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import GuessList from './guess-list'

describe('<GuessList />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<GuessList guesses={[]} />)
  })

  it('should render a list of guesses', () => {
    const values = [1, 2, 3]
    const wrapper = shallow(<GuessList guesses={values} />)
    const items = wrapper.find('li')
    expect(items.length).toEqual(values.length)
    values.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString())
    })
  })
})
