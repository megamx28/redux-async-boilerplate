import React, {PropTypes}   from 'react';
import { connect }          from 'react-redux';
import { setDocumentTitle } from '../../utils';
import Actions              from '../../actions/sessions';

import SignInForm           from '../../components/forms/SignInForm/SignInForm';

class SessionsNew extends React.Component {
  componentDidMount() {
    setDocumentTitle('Sign in');
  }

  _handleSubmit(email, password) {
    dispatch(Actions.signIn(email, password));
  }

  render() {
    return (
      <div className='container'>
        <SignInForm errors={[]} onSubmit={::this._handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  state.sessions
);

export default connect(mapStateToProps)(SessionsNew);
