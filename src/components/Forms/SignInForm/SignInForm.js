import React, { Component, PropTypes } from 'react'
import { Link }                        from 'react-router';

require('./SignInForm.scss');

export default class SignInForm extends Component {
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
          <h1>Log In to Your Account</h1>

          {::this._renderError()}

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
         
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

          <p><Link to="/sign-up">Forgot you password?</Link></p>
          <p>Don't have an account? <Link to="/sign-up">Sign up?</Link></p>
        </form>
      </div>
    )
  }
}