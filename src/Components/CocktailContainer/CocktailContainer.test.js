import React from 'react';
import { shallow } from 'enzyme';
import { CocktailContainer } from './CocktailContainer';

describe('Cocktail Container', () => {
  let wrapper;
  let mockSetCurrentCocktail = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<CocktailContainer 
      setCurrentCocktail={mockSetCurrentCocktail} />)
  });

  it.skip('should match the Cocktail Container snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})