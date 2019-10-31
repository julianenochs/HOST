export const addParty = partyName => ({
  type: 'ADD_PARTY',
  partyName
});

export const searchCocktailByName = cocktailName => ({
  type: 'SEARCH_COCKTAIL_BY_NAME',
  cocktailName
});