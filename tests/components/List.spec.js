import React    from 'react'
import {expect} from 'chai'
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils'

import List from '../../src/components/List/List'

describe('Component: List', () => {
	let component
	let items
	let displayKey

	beforeEach((done) => {
		displayKey = 'name'
		items = [
    		{id: '1', name: 'user1'},
    		{id: '2', name: 'user2'},
    		{id: '3', name: 'user3'},
    		{id: '4', name: 'user4'},
    		{id: '5', name: 'user5'}
    	]
		
		component = renderIntoDocument(
            <List items={items} displayKey={displayKey} />
        )

        done()
	})

	it('renders without issue', () => {
        const list = scryRenderedDOMComponentsWithTag(component, 'ol')

        expect(list.length).to.equal(1)
    })

    it('renders an li element for each array item', () => {
        const listElements = scryRenderedDOMComponentsWithTag(component, 'li')

        expect(listElements.length).to.equal(items.length)
    })

    it('renders displayKey prop as li elements inner HTML', () => {
        const listElements = scryRenderedDOMComponentsWithTag(component, 'li')

        listElements.forEach((item, key) => {
        	expect(item.innerHTML).to.equal(items[key][displayKey])	
        })
    })
})

