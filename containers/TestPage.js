import React, { Component, PropTypes } from 'react'
import { connect }                     from 'react-redux'
import { loadUsers }                   from '../actions'

function loadData(props) {
    props.loadUsers()
}

class TestPage extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        loadData(this.props)
    }

    render() {
        const { users } = this.props
        if (!users) {
            return <h1><i>Loading users...</i></h1>
        }

        return (
            <div>
                {users}
            </div>
        )
    }
}

TestPage.propTypes = {
    users: PropTypes.object,
    loadUsers: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        user: state.users
    }
}

export default connect(mapStateToProps, {
    loadUsers
})(TestPage)
