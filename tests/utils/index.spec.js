import {
    createConstants,
    createReducer,
    serialiseObj,
    getRequestHeaders,
    isRSAA,
    normalizeRSAARequest,
    validateRSAARequest,
    getCookie
} from './../../src/utils'
import CALL_API from './../../src/constants/callApi'

describe('Utils', () => {
    describe('createConstants', () => {
        it('returns a key value pair for each string passed in', () => {
            const constants = createConstants(
                'ROLES_REQUEST',
                'ROLES_REQUEST_SUCCESS'
            )

            expect(constants).to.deep.equal({
                ROLES_REQUEST: 'ROLES_REQUEST',
                ROLES_REQUEST_SUCCESS: 'ROLES_REQUEST_SUCCESS'
            })
        })
    })

    describe('createReducer', () => {
        it('returns the inital state on the first call with no matches', () => {
            const reducerMap = {}
            const reducer = createReducer('theintialstate', reducerMap)

            expect(reducer(undefined, {type: 'YOLO'})).to.equal('theintialstate')
        })

        it('returns the correct state on the first call with a matches', () => {
            const reducerMap = {
                YOLO: () => 'theproperstate'
            }
            const reducer = createReducer('theintialstate', reducerMap)

            expect(reducer(undefined, {type: 'YOLO'})).to.equal('theproperstate')
        })

        it('returns the same state if no value matched', () => {
            const reducerMap = {}
            const reducer = createReducer({someObj: true}, reducerMap)
            const state = reducer(undefined, {type: 'YOLO'})

            expect(reducer(state, {type: 'YOLO'})).to.equal(state)
        })

        it('returns a new state if a value matched', () => {
            const reducerMap = {
                YOLO: () => {
                    return {someObj: 2}
                }
            }
            const reducer = createReducer({someObj: 1}, reducerMap)
            const state = reducer(undefined, {})
            expect(reducer(state, {type: 'YOLO'})).to.deep.equal({someObj: 2})
        })
    })

    describe('serialiseObj', () => {
        it('serializes an object into a query string', () => {
            const obj = {foo: 'hi there', bar: '100%' }
            const serializedObj = serialiseObj(obj)

            expect(serializedObj).to.equal('foo=hi%20there&bar=100%25')
        })
    })

    describe('getRequestHeaders', () => {
        it('returns the expected headers array', () => {
            const headers = getRequestHeaders()

            expect(headers).to.deep.equal({
                'Content-Type': 'application/x-www-form-urlencoded',
                'credentials': 'same-origin',
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'X-CSRF-TOKEN': getCookie('XSRF-TOKEN')
                }
            })
        })
    })

    describe('isRSAA', () => {
        it('return true when passed and object with CALL_API key', () => {
            const action = {
                [CALL_API]: {
                    types: [],
                    endpoint: 'role/save/permissions'
                }
            }

            expect(isRSAA(action)).to.equal(true)
        })

        it('return false when action does not have a CALL_API key', () => {
            const action = {
                types: [],
                endpoint: 'role/save/permissions'
            }

            expect(isRSAA(action)).to.equal(false)
        })

        it('return false when action is not an object', () => {
            const action = [{
                [CALL_API]: {
                    types: [],
                    endpoint: 'role/save/permissions'
                }
            }]

            expect(isRSAA(action)).to.equal(false)
        })
    })

    describe('normalizeRSAARequest', () => {
        it('returns action with optional types if they dont exist', () => {
            const action = {
                types: ['pending', 'success', 'failure'],
                endpoint: 'role/save/permissions'
            }
            const normalizedRequest = normalizeRSAARequest(action)

            expect(normalizedRequest).to.deep.equal({
                types: ['pending', 'success', 'failure'],
                endpoint: 'role/save/permissions',
                method: null,
                data: null
            })
        })

        it('returns action with optional types if they dont exist', () => {
            const action = {
                types: ['pending', 'success', 'failure'],
                endpoint: 'role/save/permissions',
                method: 'POST',
                data: {test: 'test'}
            }
            const normalizedRequest = normalizeRSAARequest(action)

            expect(normalizedRequest).to.deep.equal({
                types: ['pending', 'success', 'failure'],
                endpoint: 'role/save/permissions',
                method: 'POST',
                data: {test: 'test'}
            })
        })
    })

    describe('validateRSAARequest', () => {
        it('returns true if all required keys exist', () => {
            const action = {
                types: ['pending', 'success', 'failure'],
                endpoint: 'role/save/permissions',
                method: 'POST',
                data: {test: 'test'}
            }

            expect(validateRSAARequest(action)).to.equal(true)
        })

        it('throws an error if types key doesnt exist', () => {
            const action = {
                types: ['pending', 'success', 'failure'],
                method: 'POST',
                data: {test: 'test'}
            }

            expect(() => validateRSAARequest(action)).to.throw()
        })

        it('throws an error if key types.length !== 3', () => {
            const action = {
                types: ['pending', 'success'],
                endpoint: 'role/save/permissions',
                method: 'POST',
                data: {test: 'test'}
            }

            expect(() => validateRSAARequest(action)).to.throw()
        })

        it('throws an error if endpoint key doesnt exist', () => {
            const action = {
                endpoint: 'role/save/permissions',
                method: 'POST',
                data: {test: 'test'}
            }

            expect(() => validateRSAARequest(action)).to.throw()
        })
    })
})