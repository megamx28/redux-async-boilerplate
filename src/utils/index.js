import isPlainObject from 'lodash.isplainobject';
import CALL_API from '../middleware/api/callApi';

export function getRequestHeaders() {
  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  };
}

export function setDocumentTitle(title) {
  document.title = `${title} | React Starter`;
}

export function renderErrorsFor(errors, ref) {
  if (!errors) {
    return false;
  }

  return errors.map((error, i) => {
    if (error[ref]) {
      return (
        <div key={i} className="error">
          {error[ref]}
        </div>
      );
    }

    return null;
  });
}

export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
}

export function validateRSAARequest(obj) {
  const requiredTypes = ['types', 'endpoint'];

  for (let requiredKey in requiredTypes) {
    if (!{}.hasOwnProperty.call(obj, requiredTypes[requiredKey])) {
      throw new Error(`Expected a ${requiredTypes[requiredKey]} key.`);
    }
  }

  if (obj.types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  return true;
}

export function isRSAA(action) {
  return isPlainObject(action) && {}.hasOwnProperty.call(action, CALL_API);
}

export function normalizeRSAARequest(obj) {
  const optionalTypes = ['method', 'data'];

  if (validateRSAARequest(obj)) {
    for (let optionalKey in optionalTypes) {
      if (!{}.hasOwnProperty.call(obj, optionalTypes[optionalKey])) {
        obj[optionalTypes[optionalKey]] = null;
      }
    }
  }

  return obj;
}
