import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import GuessCount from './guess-count'

describe('<GuessCount />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<GuessCount />)
  })

  it('should render guessCount and guessNoun as props', () => {
    const wrapper = shallow(<GuessCount guessCount="3" guessNoun ="guesses"/>)
    expect(wrapper.find('h2#guessCount').text()).toEqual('You\'ve made 3 guesses!')
  })
})
