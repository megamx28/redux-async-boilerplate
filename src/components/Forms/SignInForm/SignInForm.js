import React         from 'react';
import { reduxForm } from 'redux-form';
import { Link }      from 'react-router';

require('./SignInForm.scss');

class SignInForm extends React.Component {
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
          <h1>Log In to Your Account</h1>

          <input
            type="Email"
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
         
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>

          <p><Link to="/sign-up">Forgot you password?</Link></p>
          <p>Don't have an account? <Link to="/sign-up">Sign up?</Link></p>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(SignInForm);
