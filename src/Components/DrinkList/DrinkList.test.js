import React from 'react';
import { DrinkList } from './DrinkList';
import { shallow } from 'enzyme';

describe('Drink List', () => {
  let wrapper;
  let mockViewCocktail = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<DrinkList 
      props={'hi'}
      key={3}
      viewCocktail={mockViewCocktail}
      />)
  });

  it.skip('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});