import CocktailSearch from './CocktailSearch';
import React from 'react';
import { shallow } from 'enzyme';

describe('Cocktail Search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CocktailSearch />)
  });

  it.skip('should match the snapshot', ()=> {
    expect(wrapper).toMatchSnapshot();
  });
});