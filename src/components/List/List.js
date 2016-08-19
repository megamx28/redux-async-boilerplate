import React from 'react';

export default class List extends React.Component {

  render() {
    return (
      <ol>
        {this.props.items.map((item, index) => {
          return <li key={index}>{item[this.props.displayKey]}</li>
        })}
    </ol>
    )
  }

}

List.displayName = 'List';

List.propTypes = {
  items: React.PropTypes.array.isRequired,
  displayKey: React.PropTypes.string.isRequired
};

List.defaultProps = {
  items: [],
  displayKey: List.displayName
}
