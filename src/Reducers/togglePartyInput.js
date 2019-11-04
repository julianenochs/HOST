export const togglePartyInput = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PARTY_INPUT':
      return !state
    default:
      return state;
  }
}