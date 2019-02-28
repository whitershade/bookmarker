import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../../routes/index';
import './styles.css';

class App extends Component {
  render() {
    const { history, isLoading } = this.props;

    if (isLoading) return null;

    return (
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    )
  }
}

App.propTypes = {
  history: PropTypes.object,
  isLoading: PropTypes.bool
};

export default App;
