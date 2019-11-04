export const addParty = payload => ({
  type: 'ADD_PARTY',
  payload
});

export const cocktailsByName = payload => ({
  type: 'COCKTAILS_BY_NAME',
  payload
});

export const selectParty = payload => ({
  type: 'SELECT_PARTY',
  payload
});

export const selectCocktail = payload => ({
  type: 'SELECT_COCKTAIL',
  payload
});

export const saveCocktailToParty = payload => ({
  type: 'SAVE_COCKTAIL_TO_PARTY',
  payload
})

export const togglePartyInput = () => ({
  type: 'TOGGLE_PARTY_INPUT',
  payload: {}
})
