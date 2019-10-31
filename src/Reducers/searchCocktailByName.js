export const searchCocktailByName = (state = '', action) => {
  switch (action.type) {
    case 'SEARCH_COCKTAIL_BY_NAME' :
      return [...state, {cocktail: action.cocktailName}]
    default :
      return state;
  }
}