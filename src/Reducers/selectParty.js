export const selectParty = (state= [], action) => {
  switch (action.type) {
    case 'SELECT_PARTY' :
      return [...state, {id: action.partyId}]
    default :
      return state;
  }
}