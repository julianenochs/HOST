import React from 'react';
import { shallow } from 'enzyme';
import { CocktailContainer, mapStateToProps, mapDispatchToProps } from './CocktailContainer';
import { selectCocktail } from '../../Actions';

describe('Cocktail Container', () => {
  let wrapper;
  let mockSetCurrentCocktail = jest.fn();
  
  beforeEach(() => {
    wrapper = shallow(<CocktailContainer 
      setCurrentCocktail={mockSetCurrentCocktail} />)
  });

  it.skip('should match the Cocktail Container snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

describe('mapStateToProps', () => {
  it.skip('should return an object with a cocktailsByName', () => {
    let mockState = {
      cocktailsByName: [{name: 'poTATO', id: 1, }, {}]
    }
    let expected = {
      cocktailsByName: [{name: 'poTATO', id: 1, }, {}]
    }
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
  describe('mapDispatchToProps', () => {
    it.skip('calls dispatch with a selectCocktail action when selectCocktail is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = selectCocktail({strDrink: 'Martini'});
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.selectCocktail({strDrink: 'Martini'});

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});