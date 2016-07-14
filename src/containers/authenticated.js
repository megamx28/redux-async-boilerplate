import React       from 'react';
import { connect } from 'react-redux';

class AuthenticatedContainer extends React.Component {

  render() {
    return (
      <div id="authentication-container" className="application-container">
        <div className='main-container'>
          {this.props.children}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(AuthenticatedContainer);
