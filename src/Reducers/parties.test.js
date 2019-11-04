import { parties } from './parties';

describe('parties', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = {selectedParty: 0, list: []};

    // Execution
    const result = parties(undefined, { selectedParty: 0, list: [] });

    // Expectation
    expect(result).toEqual(expected);
  });
});