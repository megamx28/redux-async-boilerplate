import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { pushState }                   from 'redux-router'
import { resetErrorMessage }           from '../actions/users'

class App extends Component {
    static propTypes: {
        // Injected by React Redux
        errorMessage: PropTypes.string,
        resetErrorMessage: PropTypes.func.isRequired,
        pushState: PropTypes.func.isRequired,

        // Injected by React Router
        children: PropTypes.node
    };

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleDismissClick = this.handleDismissClick.bind(this)
    }

    handleDismissClick(e) {
        this.props.resetErrorMessage()
        e.preventDefault()
    }

    handleChange(nextValue) {
        this.props.pushState(null, `/${nextValue}`)
    }

    renderErrorMessage() {
        if (!this.props.errorMessage) {
            return null
        }

        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{this.props.errorMessage}</b>

                (<a href="#" onClick={this.handleDismissClick}>
                    Dismiss
                </a>)
            </p>
        )
    }

    render() {
        return (
            <div>
                {this.renderErrorMessage()}
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps, {
    resetErrorMessage,
    pushState
})(App)
