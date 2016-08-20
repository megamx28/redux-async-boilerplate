import React from 'react';

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
  children: React.PropTypes.node.isRequired
};
