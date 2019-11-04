export const selectParty = (state= [], action) => {
  switch (action.type) {
    case 'SELECT_PARTY' :
      return {
        selectedParty: action.payload,
        ...state
      }
    default :
      return state;
  }
}