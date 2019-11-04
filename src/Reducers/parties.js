export const parties = (state = {selectedParty: 0, list: []}, action) => {
  switch (action.type) {
    case 'ADD_PARTY':
      return { ...state, list: [...state.list, { id: Date.now(), name: action.payload, cocktails: [] }] }
    case 'SAVE_COCKTAIL_TO_PARTY':
      const partyToUpdate = state.list.filter(party => party.id == action.payload.selectedParty)[0]
      partyToUpdate.cocktails.push(action.payload.cocktail);
      return {
        selectedParty: state.selectedParty,
        list: state.list
      }
    case 'SELECT_PARTY':
      return {
        selectedParty: action.payload,
        list: state.list
      }
    default:
      return state;
  }
}