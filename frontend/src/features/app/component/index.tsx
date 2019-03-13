import React, {useEffect} from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../../routes/index';
import './styles.css';
import styles from './styles.module.css';

type Props = {
  history: History,
  loadUser: Function
}

const App:React.SFC<Props> = ({ history, loadUser }) => {
    useEffect(() => {
        loadUser();
    }, []);

    return (
        <div className={styles.container}>
            <ConnectedRouter history={history}>
                { routes }
            </ConnectedRouter>
        </div>
    );
};

export default App;

