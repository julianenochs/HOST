export const addParty = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PARTY' :
      return [...state, {id: Date.now(), name: action.partyName, cocktails: []}]
    default :
      return state;
  }
}