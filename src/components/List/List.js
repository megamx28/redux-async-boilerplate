import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './List.scss';

export default class List extends Component {
  render() {
    return (
      <ol className="rc-list">
        {this.props.items.map((item) => {
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
  displayKey: PropTypes.string.isRequired,
};

List.defaultProps = {
  items: [],
};
