import { searchCocktailsByName } from './apiCalls';

describe('apiCalls', () => {
  const mockCocktails = [{cocktail: 'martini'}, {cocktail: 'dirty martini'}]
  let mockResponse = {
    drinks: mockCocktails
  }
  let cocktailName
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should be called with the correct url', () => {
    searchCocktailsByName()
    expect(window.fetch).toHaveBeenCalledWith(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
  });

  it('should return an array of cocktails', () => {
    searchCocktailsByName()
      .then(cocktails => expect(cocktails).toEqual(mockCocktails))
  });

  it.skip('should return an error if the promise rejects', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({ ok: false });
    });
    expect(searchCocktailsByName).rejects.toEqual(Error('failed to get cocktail by name'));
  });

});