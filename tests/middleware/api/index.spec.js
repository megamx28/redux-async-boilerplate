import nock from 'nock';
import expect, { createSpy, spyOn, isSpy } from 'expect';
import apiMiddleware from '../../../src/middleware/api';
import CALL_API from '../../../src/middleware/api/callApi';


describe('Middleware:Api', () => {
  let store;
  let next;
  let action;
  let url = 'https://test.com/api/login';

  beforeEach(() => {
    store = {};
    next = createSpy();
    action = {
      [CALL_API]: {
        method: 'GET',
        types: ['LOADING', 'SUCCESS', 'ERROR'],
        endpoint: url
      }
    };
  });

  describe('when action is called without CALL_API', () => {
    it('passes the action to the next middleware', () => {
      action = { type: 'not-CALL_API' };
      apiMiddleware(store)(next)(action);

      expect(next).toHaveBeenCalledWith(action);
    });
  });

  describe('when action is with CALL_API', () => {
    let nockScope;

    beforeEach(() => {
      nockScope = nock('https://test.com').get('/api/login');
    });

    afterEach(() => {
      nock.cleanAll();
    });

    it('sends a request to a path with query and body params', () => {
      nockScope = nockScope.reply(200, { status: 'ok' });
      apiMiddleware(store)(next)(action);

      setTimeout(() => {
        nockScope.done();
      }, 500);
    });
  });
});
