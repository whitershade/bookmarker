import React from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../../routes';
import './styles.css';
import styles from './styles.module.css';

interface Props {
  history: History;
}

const App: React.SFC<Props> = ({ history }) => (
  <div className={styles.container}>
    <ConnectedRouter history={history}>
      { routes }
    </ConnectedRouter>
  </div>
);

export default App;
