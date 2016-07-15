import React, {PropTypes} from 'react';
import { connect }        from 'react-redux';
import { Link }           from 'react-router';
import QuotesActions      from '../../actions/quotes';

import { setDocumentTitle, renderErrorsFor } from '../../utils';

class QuotesNew extends React.Component {
  componentDidMount() {
    setDocumentTitle('Create Quote');
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { errors } = this.props;

    return (
      <div className="view-container quotes new">
        <main>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.registrations.errors
});

export default connect(mapStateToProps)(QuotesNew);
