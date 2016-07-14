import React, { Component, PropTypes } from 'react'
import { bindActionCreators }          from 'redux'
import { connect }                     from 'react-redux'
import UserActions                     from '../../actions/users'
import List                            from '../../components/List/List'

class UsersPage extends Component {
  static propTypes: {
    actions: React.PropTypes.object,
    users: PropTypes.object
  };

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.actions.loadUsers()
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
        <List items={this.props.users} displayKey="name" />
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
