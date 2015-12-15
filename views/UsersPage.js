import React, { Component, PropTypes } from 'react'
import { bindActionCreators }          from 'redux'
import { connect }                     from 'react-redux'
import UserActions                     from '../actions/users'

class UsersPage extends Component {
    propTypes: {
        actions: React.PropTypes.object,
        users: PropTypes.object
    }

    constructor(props) {
        super(props)

        this.renderUsers = this.renderUsers.bind(this)
    }

    componentWillMount() {
        this.props.actions.loadUsers()
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
