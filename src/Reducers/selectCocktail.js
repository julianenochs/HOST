export const selectCocktail = (state = [], action) => {
  switch (action.type) {
    case 'SELECT_COCKTAIL' :
      return [...state, action.currentCocktail]
    default :
      return state;
  } 
}