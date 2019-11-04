export const cocktailsByName = (state = [], action) => {
  switch (action.type) {
    case 'COCKTAILS_BY_NAME' :
      return [...state, ...action.payload]
    default :
      return state;
  }
}