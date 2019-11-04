export const selectCocktail = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_COCKTAIL' :
      return action.cocktail
    default :
      return state;
  } 
}