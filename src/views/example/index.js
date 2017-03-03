import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import faker from 'faker';
import ExampleActions from '../../actions/example';
import List from '../../components/List/List';

const stubs = [];

for (let i = 0; i <= 6; i += 1) {
  stubs.push({
    id: i,
    name: faker.name.findName(),
  });
}

export class ExampleView extends Component {

  constructor(props) {
    super(props);

    this.items = stubs;
  }

  render() {
    return (
      <div className="rc-example-view">
        <List items={this.items} displayKey="name" />
      </div>
    );
  }

}

ExampleView.propTypes = {
  exampleActions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => ({
  exampleActions: bindActionCreators(ExampleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleView);
