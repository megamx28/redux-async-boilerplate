import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ExampleActions from 'actions/example';
import List from 'components/List/List';
import faker from 'faker';

let stubs = [];

for (let i = 0; i <= 6; i++) {
  stubs.push({
    id: i,
    name: faker.name.findName(),
  });
}

class ExampleView extends Component {

  constructor(props) {
    super(props);

    this.items = stubs;
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
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => ({
  exampleActions: bindActionCreators(ExampleActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleView);
