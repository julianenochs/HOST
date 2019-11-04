import { togglePartyInput } from './togglePartyInput';

describe('togglePartyInput', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = false;

    // Execution
    const result = togglePartyInput(undefined, false);

    // Expectation
    expect(result).toEqual(expected);
  });
});