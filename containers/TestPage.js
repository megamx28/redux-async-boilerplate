import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import * as actionCreators             from '../actions'

class TestPage extends Component {
    propTypes: {
        users: PropTypes.object,
        loadUsers: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.renderUsers = this.renderUsers.bind(this)
    }

    componentWillMount() {
        this.props.loadUsers()
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.users !== this.props.users) {
        //     this.props.loadUsers()
        // }
    }

    renderUsers() {
        console.log(this.props.users)

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


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, actionCreators)(TestPage)
