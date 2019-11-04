export const parties = (state = {selectedParty: {}, list: []}, action) => {
  switch (action.type) {
    case 'ADD_PARTY':
      return { ...state, list: [...state.list, { id: Date.now(), name: action.payload, cocktails: [] }] }
    case 'SAVE_COCKTAIL_TO_PARTY':
      return state
    case 'SELECT_PARTY':
      return {
        selectedParty: action.payload,
        ...state
      }
    default:
      return state;
  }
}