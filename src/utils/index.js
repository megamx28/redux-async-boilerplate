export const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function buildHeaders() {
  const token = localStorage.getItem('token');
  return { ...defaultHeaders, Authorization: token };
}

export function setDocumentTitle(title) {
  document.title = `${title} | React Starter`;
}

export function renderErrorsFor(errors, ref) {
  if (!errors) return false;

  return errors.map((error, i) => {
    if (error[ref]) {
      return (
        <div key={i} class="error">
          {error[ref]}
        </div>
      );
    }
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
    const handler = fnMap[type]
    return handler ? handler(state, payload) : state
  }
}