import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import GuessForm from './guess-form'

describe('<GuessForm />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<GuessForm />)
  })

  it('Should fire onMakeGuess on form submit', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = 10;
    wrapper.find('input[type="number"]').instance().value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it('Should clear input on for submit', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
})
