import routes from '../../src/routes';

describe('Routes', () => {
  it('returns a function of React Router routers', () => {
    expect(routes().type.displayName).toEqual('Route');
  });
});
