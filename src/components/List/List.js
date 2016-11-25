import React, { Component, PropTypes } from 'react';
import themerReact from '../../decorators';

import './List.scss';

export default class List extends Component {

  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e);
    }
  }

  render() {
    return (
      <ol className="list">
        {this.props.items.map((item, index) => {
          return (
            <li key={index} onClick={this.handleOnClick}>
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
  onClick: PropTypes.func,
  displayKey: PropTypes.string.isRequired
};

List.defaultProps = {
  items: []
};
