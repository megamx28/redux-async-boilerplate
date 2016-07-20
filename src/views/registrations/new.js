import React, {PropTypes}   from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

import { setDocumentTitle, renderErrorsFor } from 'utils';
import Actions from 'actions/registrations';

import RegisterForm from 'components/forms/RegisterForm/RegisterForm';

class RegistrationsNew extends React.Component {
  componentDidMount() {
    setDocumentTitle('Sign up');
  }

  _handleSubmit(name, email, password, password_confirmation) {
    dispatch(Actions.signUp(name, email, password, password_confirmation));
  }

  render() {
    return (
      <div className='container'>
        <RegisterForm errors={[]} onSubmit={::this._handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.registrations.errors,
});

export default connect(mapStateToProps)(RegistrationsNew);
