import { shallow } from 'enzyme';
import React from 'react';
import { Header } from './Header';

describe('Header', () => {
  let wrapper;
  let mockResetHome = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Header 
      resetHome={mockResetHome} />)
  });

  it('should match the Header snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});