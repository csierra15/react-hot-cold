import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import TopNav from './top-nav'

describe('<TopNav />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<TopNav />)
  })

  it('Should call onNewGame on click', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    wrapper.find('.new').simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });

  it('Should call onGenerateAuralUpdate when what is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
    wrapper.find('.status-link').simulate('click');
    expect(callback).toHaveBeenCalled();
  });
})
