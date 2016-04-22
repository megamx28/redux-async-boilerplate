import React, { Component, PropTypes } from 'react'
import { Provider }                    from 'react-redux'
import { ReduxRouter }                 from 'redux-router'

export default class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <ReduxRouter />
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
