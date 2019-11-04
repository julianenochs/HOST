export const parties = (state = {selectedParty: 0, list: []}, action) => {
  switch (action.type) {
    case 'ADD_PARTY':
      return { ...state, list: [...state.list, { id: Date.now(), name: action.payload, cocktails: [] }] }
    case 'SAVE_COCKTAIL_TO_PARTY':
      const partyToUpdate = state.list.filter(party => party.id == action.payload.selectedParty)[0]
      console.log('partyToUpdate', action.payload.selectedParty)
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
    case 'DELETE_COCKTAIL':
      const partyToDeleteFrom = state.list.filter(party => party.id === state.selectedParty)[0]
      const updatedCocktailList = partyToDeleteFrom.cocktails.length > 1 ? partyToDeleteFrom.cocktails.filter(cocktail => cocktail.idDrink !== action.payload) : [];
      partyToDeleteFrom.cocktails = updatedCocktailList
      const newList = state.list.length > 1 ? state.list.filter(party => party.id !== state.selectedParty) : [];
      newList.push(partyToDeleteFrom);
      return {
        selectedParty: state.selectedParty,
        list: newList
      }
    default:
      return state;
  }
}