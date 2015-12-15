import React, { Component, PropTypes } from 'react'
import { bindActionCreators }          from 'redux'
import { connect }                     from 'react-redux'
import UserActions                     from '../actions/users'

class TestPage extends Component {
    propTypes: {
        actions: React.PropTypes.object,
        users: PropTypes.object
    }

    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
        this.renderUsers = this.renderUsers.bind(this)
    }

    componentWillMount() {
        this.props.actions.loadUsers()
    }

    handleClick() {
        return this.props.action.testShane()
    }

    renderUsers() {
        return (
            <ol>
                {this.props.users.map((user, index) => {
                    return <li key={index}>{user.name}</li>
                })}
            </ol>
        )
    }

    render() {
        if (!this.props.users.length) {
            return (
                <div>
                    <button onClick={this.handleClick}>Click Test</button>
                    <h1><i>Loading user...</i></h1>
                </div>
            )
        }

        return (
            <div>
                {this.renderUsers()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(UserActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TestPage)
