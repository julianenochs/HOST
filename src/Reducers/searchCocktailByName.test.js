import { cocktailsByName } from './searchCocktailByName';

describe('cocktailsByName', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result = cocktailsByName(undefined, []);

    // Expectation
    expect(result).toEqual(expected);
  });
});