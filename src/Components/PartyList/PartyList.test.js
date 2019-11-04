import { shallow } from 'enzyme';
import PartyList from './PartyList';
import React from 'react';

describe('Party List', () => {
  let wrapper;
  let mockSetCurrentParty = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<PartyList 
      setCurrentParty={mockSetCurrentParty}
      key={3}/>)
  });

  it.skip('should match the Party List Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});