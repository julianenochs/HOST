import { Menu } from './Menu';
import { shallow } from 'enzyme';
import React from 'react';

describe('Menu', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Menu />)
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});