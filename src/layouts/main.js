import React from 'react';
import PropTypes from 'prop-types';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
