import 'babel-polyfill'
import React          from 'react'
import { render }     from 'react-dom'
import Root           from './containers/Root'
import configureStore from './store/configureStore'

const RedBox = require('redbox-react')
const store = configureStore()
const root = document.getElementById('root')

if (__DEV__) {
	try {
		render(<Root store={store} />, root)
	} catch (e) {
		render(<RedBox error={e} />, root)
	}
} else {
	render(<Root store={store} />, root)
}
