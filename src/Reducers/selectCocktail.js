export const selectCocktail = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_COCKTAIL' :
      return action.payload
    default :
      return state;
  } 
}