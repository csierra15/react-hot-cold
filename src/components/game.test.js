import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import Game from './game'

describe('<Game />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<Game />)
  })

  it('should render guesses as empty array initially', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.state('guesses')).toEqual([])
  })

  it('should render feedback as string initially', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.state('feedback')).toEqual('Make your guess!')
  })

  it('should render auralStatus as empty string initially', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.state('auralStatus')).toEqual('')
  })

  it('should render correctAnswer by picking random number from 1 to 100', () => {
    const wrapper = shallow(<Game />)
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1)
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100)
  })

  it('should start a new game when restartGame runs', () => {
    const wrapper = shallow(<Game />)
    wrapper.setState({
      guesses: [1,2,3,4,5],
      feedback: 'You\'re Warm.',
      correctAnswer: 10
    })
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([])
    expect(wrapper.state('feedback')).toEqual('Make your guess!')
    expect(wrapper.state('auralStatus')).toEqual('')
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1)
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100)
  })

  it('should display correct feedback on makeGuess func', () => {
    const wrapper = shallow(<Game />)
    const inst = wrapper.instance()
    wrapper.setState({correctAnswer: 100})
    inst.makeGuess(25)
    expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...')
    inst.makeGuess(70)
    expect(wrapper.state('feedback')).toEqual('You\'re Cold...')
    inst.makeGuess(90)
    expect(wrapper.state('feedback')).toEqual('You\'re Warm.')
    inst.makeGuess(95)
    expect(wrapper.state('feedback')).toEqual('You\'re Hot!')
    inst.makeGuess(100)
    expect(wrapper.state('feedback')).toEqual('You got it!')
  })

  it('should update auralStatus on generateAuralUpdate func', () => {
    const wrapper = shallow(<Game />);
    const inst = wrapper.instance()
    wrapper.setState({
      correctAnswer: 100
    });
    inst.makeGuess(75);
    inst.makeGuess(50);
    inst.makeGuess(25);
    inst.generateAuralUpdate();
    expect(wrapper.state('auralStatus')).toEqual('Here\'s the status of the game right now: You\'re Ice Cold... You\'ve made 3 guesses. In order of most- to least-recent, they are: 25, 50, 75');
  })
})
