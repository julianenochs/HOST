export const saveCocktailToParty = (state = null, action) => {
  switch (action.type) {
    case 'SAVE_COCKTAIL_TO_PARTY' :
      return {
        cocktails: [...state.cocktails, action.payload],
        ...state
      }
    default :
      return state
  }
}