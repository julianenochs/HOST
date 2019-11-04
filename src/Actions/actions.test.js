import * as actions from './index';

describe('actions', () => {
  let payload;
  let togglePayload = {}
  it('should have a type of ADD_PARTY', () => {
    const expectedAction = {
      type: 'ADD_PARTY',
      payload
    }

    const result = actions.addParty(payload);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of COCKTAILS_BY_NAME', () => {
    const expectedAction = {
      type: 'COCKTAILS_BY_NAME',
      payload
    }

    const result = actions.cocktailsByName(payload);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SELECT_PARTY', () => {
    const expectedAction = {
      type: 'SELECT_PARTY',
      payload
    }

    const result = actions.selectParty(payload);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SELECT_COCKTAIL', () => {
    const expectedAction = {
      type: 'SELECT_COCKTAIL',
      payload
    }

    const result = actions.selectCocktail(payload);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of SAVE_COCKTAIL_TO_PARTY', () => {
    const expectedAction = {
      type: 'SAVE_COCKTAIL_TO_PARTY',
      payload
    }

    const result = actions.saveCocktailToParty(payload);
    expect(result).toEqual(expectedAction)
  });

  it.skip('should have a type of TOGGLE_PARTY_INPUT', () => {
    const expectedAction = {
      type: 'TOGGLE_PARTY_INPUT',
      togglePayload
    }

    const result = actions.togglePartyInput(togglePayload);
    expect(result).toEqual(expectedAction)
  });

  it('should have a type of DELETE_COCKTAIL', () => {
    const expectedAction = {
      type: 'DELETE_COCKTAIL',
      payload
    }

    const result = actions.deleteCocktail(payload);
    expect(result).toEqual(expectedAction)
  });
});