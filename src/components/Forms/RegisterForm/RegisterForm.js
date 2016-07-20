import React         from 'react'
import { reduxForm } from 'redux-form';
import { Link }      from 'react-router';

import './RegisterForm.scss';

class RegisterForm extends React.Component {
  static propTypes: {
    fields: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div className="auth-container">
        <form onSubmit={this.props.onSubmit}>
          <h1>Create Your Account</h1>

          <input
            type="text"
            placeholder="Name"
            className="form-control"
            {...this.props.fields.name}
          />

          <input
            type="email"
            placeholder="Email"
            className="form-control"
            {...this.props.fields.email}
          />
         
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            {...this.props.fields.password}
          />

          <input
            type="password"
            placeholder="Confirm your password"
            className="form-control"
            {...this.props.fields.password_confirmation}
          />
         
          <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={this.props.submitting}>
            Get Started
          </button>

          <p>Already have an account? <Link to="/sign-in">Sign in?</Link></p>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'register',
  fields: ['name', 'email', 'password', 'password_confirmation']
})(RegisterForm);
