/* @flow */

import { includes, isPlainObject } from 'lodash';
import CALL_API from '../middleware/api/callApi';

/**
 *  Accepts a variable number of string arguments and returns a maps of redux constants.
 *
 * @param  {...string} constants Variable number of strings to convert to constant map
 * @return {object}              Object of constants
 */
export function createConstants(...constants: Array<string>): Object {
  return constants.reduce((acc, constant) => Object.assign(acc, { [constant]: constant }), {});
}

/**
 * Converts an associative array of type constant|function into a redux ready
 * map of reducer functions
 *
 * @param  {object}   initialState The intial reducer object
 * @param  {array}    fnMap        Associative array of reducer functions
 * @return {function}              Redux ready reducer map
 */
export function createReducer(initialState: Object, fnMap: Object): Function|Object {
  return (state: Object = initialState, { type, payload }: { type: string, payload: Object }) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
}

/**
 * Validates that a given action is a "Redux Standard API-calling Actions"
 *
 * @param  {object}  action The Redux action to validate
 * @return {boolean}        If the action is or isn't a RSAA
 */
export function isRSAA(action: Object): boolean {
  return isPlainObject(action) && {}.hasOwnProperty.call(action, CALL_API);
}

/**
 * Validates that a given action contains all of the required properties.
 * If something is missing, it throws an error.
 *
 * @param  {object}  obj The action object to validate
 * @return {boolean}     If the action is valid
 */
export function validateRSAARequest(obj: { types: Array<string>, endpoint: string }): boolean {
  return includes(Object.keys(obj), 'endpoint', 'types');
}

/**
 * Checks that given action conforms to the expected format.
 *
 * @param  {object} obj The action object to normalize
 * @return {object}     The normalized object
 */
export function normalizeRSAARequest(obj: Object): Object {
  const optionalTypes = ['method', 'data'];

  if (validateRSAARequest(obj)) {
    optionalTypes.forEach((key: string): void => {
      if (!{}.hasOwnProperty.call(obj, key)) {
        Object.assign(obj, {
          [key]: null,
        });
      }
    });
  }

  return obj;
}
