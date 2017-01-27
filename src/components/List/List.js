import React, { Component, PropTypes } from 'react';

import './List.scss';

export default class List extends Component {

  render() {
    return (
      <ol className="list">
        {this.props.items.map((item, index) => {
          return (
            <li key={item.id}>
              {item[this.props.displayKey]}
            </li>
          );
        })}
      </ol>
    );
  }

}

List.displayName = 'List';

List.propTypes = {
  items: PropTypes.array,
  displayKey: PropTypes.string.isRequired
};

List.defaultProps = {
  items: []
};
