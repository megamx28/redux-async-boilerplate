import CALL_API from './../../src/middleware/api/callApi';
import {
  createConstants,
  createReducer,
  isRSAA,
  normalizeRSAARequest,
  validateRSAARequest,
} from './../../src/utils';

describe('Utils', () => {
  describe('createConstants', () => {
    it('returns a key value pair for each string passed in', () => {
      const constants = createConstants(
        'ROLES_REQUEST',
        'ROLES_REQUEST_SUCCESS'
      );

      expect(constants).toEqual({
        ROLES_REQUEST: 'ROLES_REQUEST',
        ROLES_REQUEST_SUCCESS: 'ROLES_REQUEST_SUCCESS',
      });
    });
  });

  describe('createReducer', () => {
    it('returns the inital state on the first call with no matches', () => {
      const reducerMap = {};
      const reducer = createReducer('theintialstate', reducerMap);

      expect(reducer(undefined, { type: 'YOLO' })).toEqual('theintialstate');
    });

    it('returns the correct state on the first call with a matches', () => {
      const reducerMap = {
        YOLO: () => 'theproperstate',
      };
      const reducer = createReducer('theintialstate', reducerMap);

      expect(reducer(undefined, { type: 'YOLO' })).toEqual('theproperstate');
    });

    it('returns the same state if no value matched', () => {
      const reducerMap = {};
      const reducer = createReducer({ someObj: true }, reducerMap);
      const state = reducer(undefined, { type: 'YOLO' });

      expect(reducer(state, { type: 'YOLO' })).toEqual(state);
    });

    it('returns a new state if a value matched', () => {
      const reducerMap = {
        YOLO: () => ({
          someObj: 2,
        }),
      };

      const reducer = createReducer({ someObj: 1 }, reducerMap);
      const state = reducer(undefined, {});

      expect(reducer(state, { type: 'YOLO' })).toEqual({ someObj: 2 });
    });
  });

  describe('isRSAA', () => {
    it('return true when passed and object with CALL_API key', () => {
      const action = {
        [CALL_API]: {
          types: [],
          endpoint: 'role/save/permissions',
        },
      };

      expect(isRSAA(action)).toEqual(true);
    });

    it('return false when action does not have a CALL_API key', () => {
      const action = {
        types: [],
        endpoint: 'role/save/permissions',
      };

      expect(isRSAA(action)).toEqual(false);
    });

    it('return false when action is not an object', () => {
      const action = [{
        [CALL_API]: {
          types: [],
          endpoint: 'role/save/permissions',
        },
      }];

      expect(isRSAA(action)).toEqual(false);
    });
  });

  describe('normalizeRSAARequest', () => {
    it('returns action with optional types if they dont exist', () => {
      const action = {
        types: ['pending', 'success', 'failure'],
        endpoint: 'role/save/permissions',
      };
      const normalizedRequest = normalizeRSAARequest(action);

      expect(normalizedRequest).toEqual({
        types: ['pending', 'success', 'failure'],
        endpoint: 'role/save/permissions',
        method: null,
        data: null,
      });
    });

    it('returns action as is', () => {
      const action = {
        types: ['pending', 'success', 'failure'],
      };
      const normalizedRequest = normalizeRSAARequest(action);

      expect(normalizedRequest).toEqual({
        types: ['pending', 'success', 'failure'],
      });
    });

    it('returns action with optional types if they dont exist', () => {
      const action = {
        types: ['pending', 'success', 'failure'],
        endpoint: 'role/save/permissions',
        method: 'POST',
        data: { test: 'test' },
      };
      const normalizedRequest = normalizeRSAARequest(action);

      expect(normalizedRequest).toEqual({
        types: ['pending', 'success', 'failure'],
        endpoint: 'role/save/permissions',
        method: 'POST',
        data: { test: 'test' },
      });
    });
  });

  describe('validateRSAARequest', () => {
    it('returns true if all required keys exist', () => {
      const action = {
        types: ['pending', 'success', 'failure'],
        endpoint: 'role/save/permissions',
        method: 'POST',
        data: { test: 'test' },
      };

      expect(validateRSAARequest(action)).toEqual(true);
    });

    it('returns false if types key doesnt exist', () => {
      const action = {
        types: ['pending', 'success', 'failure'],
        method: 'POST',
        data: { test: 'test' },
      };

      expect(validateRSAARequest(action)).toEqual(false);
    });
  });
});
