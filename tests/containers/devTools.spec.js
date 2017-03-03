import devTools from '../../src/containers/devTools';

describe('devTools', () => {
  it('returns action CALL_API info', () => {
    expect(typeof devTools).toEqual('function');
  });
});
