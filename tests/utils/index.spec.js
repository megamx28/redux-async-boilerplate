import {
    createConstants,
    createReducer,
    serialiseObj,
    getRequestHeaders
} from './../../src/utils'

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
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
    })
})