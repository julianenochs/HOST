import * as actions from './index';

describe('actions', () => {
  let partyName
  beforeEach(() => {
    partyName = 'Freaky Tiki'
  });
  it('should have a type of ADD_PARTY', () => {
    const expectedAction = {
      type: 'ADD_PARTY',
      partyName
    }

    const result = actions.addParty(partyName);
    expect(result).toEqual(expectedAction);
  });
});