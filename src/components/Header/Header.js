import React         from 'react'
import { reduxForm } from 'redux-form';
import { Link }      from 'react-router';

import './Header.scss';

export default class Header extends React.Component {
  static propTypes: {
    isAuthenticated: React.PropTypes.bool
  };

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Project name</a>
          </div>
        </div>
      </nav>
    )
  }
}
