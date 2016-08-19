import React, { Component, PropTypes } from 'react';
import { bindActionCreators }          from 'redux';
import { connect }                     from 'react-redux';
import UserActions                     from 'actions/example';
import List                            from 'components/List/List';
import faker                           from 'faker';

class ExampleView extends Component {

  constructor(props) {
    super(props);

    this.items = [];
  }

  componentDidMount() {
    for (let i = 0; i <= 6; i++) {
      this.items.push({name: faker.name.findName()})
    }
  }

  render() {
    return (
      <div>
        <List items={this.items} displayKey="name" />
      </div>
    );
  }

}

ExampleView.propTypes = {
  actions: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(UserActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleView);
