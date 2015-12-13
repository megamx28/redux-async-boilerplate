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

    componentWillReceiveProps(nextProps) {
        if (nextProps.users !== this.props.users) {
            loadData(nextProps)
        }
    }

    render() {
        const { user } = this.props
        if (!user) {
            return <h1><i>Loading user...</i></h1>
        }

        return (
            <div>
                {user}
            </div>
        )
    }
}

TestPage.propTypes = {
    user: PropTypes.object,
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
