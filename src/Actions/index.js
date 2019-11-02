export const addParty = partyName => ({
  type: 'ADD_PARTY',
  partyName
});

export const cocktailsByName = cocktailNames => ({
  type: 'COCKTAILS_BY_NAME',
  cocktailNames
});

export const selectParty = partyId => ({
  type: 'SELECT_PARTY',
  partyId
});

export const selectCocktail = cocktailId => ({
  type: 'SELECT_COCKTAIL',
  cocktailId
});

export const saveCocktailToParty = (cocktailId, partyId) => ({
  type: 'SAVE_COCKTAIL_TO_PARTY',
  cocktailId,
  partyId
})