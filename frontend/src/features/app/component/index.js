import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../../routes/index';
import './styles.css';
import styles from './styles.module.css';

class App extends Component {
  render() {
    const { history, isLoading } = this.props;

    if (isLoading) return null;

    return (
      <div className={styles.container}>
        <ConnectedRouter history={history}>
          { routes }
        </ConnectedRouter>
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.object,
  isLoading: PropTypes.bool
};

export default App;
