import React from 'react';

const decorators = [];

const themerReact = (Component) => {
  return class extends React.Component {
    componentWillMount() {
      console.log(this.props);
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
};

export default (decorator, theme) => {
  return (target) => themerReact(target);
};
