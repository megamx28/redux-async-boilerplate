import React, { Component, PropTypes } from 'react'
import { Provider }                    from 'react-redux'
import { ReduxRouter }                 from 'redux-router'
import DevTools                        from './DevTools'

export default class Root extends Component {
    constructor (props) {
        super(props)

        this.renderDevTools = this.renderDevTools.bind(this)
    }

    renderDevTools () {
        if (__DEBUG__) {
            return <DevTools />
        }
    }

    render () {
        return (
            <Provider store={this.props.store}>
                <div>
                    <ReduxRouter />
                    {this.renderDevTools()}
                </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
