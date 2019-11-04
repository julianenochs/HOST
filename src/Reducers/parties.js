export const parties = (state = {selectedParty: 0, list: []}, action) => {
  switch (action.type) {
    case 'ADD_PARTY':
      return { ...state, list: [...state.list, { id: Date.now(), name: action.payload, cocktails: [] }] }
    case 'SAVE_COCKTAIL_TO_PARTY':
      const partyToUpdate = state.list.find(party => party.id === state.selectedParty)
      partyToUpdate.cocktails.push(action.payload);
      const updateList = [...state.list, partyToUpdate]
      return {
        list: updateList,
        ...state
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