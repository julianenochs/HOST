import { selectCocktail } from './selectCocktail';

describe('selectCocktail', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = {};

    // Execution
    const result = selectCocktail(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});