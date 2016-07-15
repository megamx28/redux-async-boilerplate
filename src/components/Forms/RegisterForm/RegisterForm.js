import React, { Component, PropTypes } from 'react'
import { Link }                        from 'react-router';

require('./RegisterForm.scss');

export default class RegisterForm extends Component {
  static propTypes: {
    errors: React.PropTypes.array,
    onSubmit: React.PropTypes.func.isRequired
  };

  _handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.refs.email.value, this.refs.password.value);
  }

  _renderError() {
    if (this.props.errors.length) {
      return (
        <div className="error">
          {this.props.errors}
        </div>
      );  
    }

    return null;
  }

  render() {
    return (
      <div className="auth-container">
        <form onSubmit={::this._handleSubmit}>
          <h1>Create Your Account</h1>

          {::this._renderError()}

          <input
            ref="name"
            type="text"
            id="name"
            placeholder="Name"
            required="true"
            className="form-control"
          />

          <input
            ref="email"
            type="Email"
            id="email"
            placeholder="Email"
            required="true"
            className="form-control"
          />
         
          <input
            ref="password"
            type="password"
            id="password"
            placeholder="Password"
            required="true"
            className="form-control"
          />

          <input
            ref="password_confirmation"
            type="password"
            id="password_confirmation"
            placeholder="Confirm your password"
            required="true"
            className="form-control"
          />
         
          <button className="btn btn-lg btn-primary btn-block" type="submit">Get Started</button>

          <p>Already have an account? <Link to="/sign-in">Sign in?</Link></p>
        </form>
      </div>
    )
  }
}