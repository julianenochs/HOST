export const saveCocktailToParty = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_COCKTAIL_TO_PARTY' :
      return [...state, {cocktail: action.cocktailId, party: action.partyId}]
    default :
      return state
  }
}