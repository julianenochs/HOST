import * as actions from './index';

describe('actions', () => {
  let partyName, cocktailNames, partyId, cocktailId
  beforeEach(() => {
    partyName = 'Freaky Tiki',
    cocktailNames = ['Martini', 'Dirty Martini'],
    partyId = 1234,
    cocktailId = 5678
  });
  it('should have a type of ADD_PARTY', () => {
    const expectedAction = {
      type: 'ADD_PARTY',
      partyName
    }

    const result = actions.addParty(partyName);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of COCKTAILS_BY_NAME', () => {
    const expectedAction = {
      type: 'COCKTAILS_BY_NAME',
      cocktailNames
    }

    const result = actions.cocktailsByName(cocktailNames);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SELECT_PARTY', () => {
    const expectedAction = {
      type: 'SELECT_PARTY',
      partyId
    }

    const result = actions.selectParty(partyId);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SELECT_COCKTAIL', () => {
    const expectedAction = {
      type: 'SELECT_COCKTAIL',
      cocktailId
    }

    const result = actions.selectCocktail(cocktailId);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SAVE_COCKTAIL_TO_PARTY', () => {
    const expectedAction = {
      type: 'SAVE_COCKTAIL_TO_PARTY',
      cocktailId, 
      partyId
    }

    const result = actions.saveCocktailToParty(cocktailId, partyId);
    expect(result).toEqual(expectedAction)
  });
});