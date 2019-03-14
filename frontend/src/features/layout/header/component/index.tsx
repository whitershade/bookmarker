import React, { Fragment, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styles from './styles.module.css';

type Props = {
    isAuthenticated: boolean;
    logout: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Component = ({ isAuthenticated, logout }: Props) => (
  <header className={styles.header}>
      <AppBar position="static" color="default">
          <Toolbar>
              <div className={styles.content}>
                  <div>
                      <Link to="/">
                          <Button>Articles</Button>
                      </Link>
                      <Link to="/articles/add">
                          <Button>Add new</Button>
                      </Link>
                  </div>
                  <div>
                      { isAuthenticated ? (
                          <Button
                              onClick={logout}
                              color="primary"
                              variant="contained"
                          >
                              Logout
                          </Button>
                      ) : (
                          <Fragment>
                              <Link to="/login">
                                  <Button>Login</Button>
                              </Link>
                              <Link to="/register">
                                  <Button>Register</Button>
                              </Link>
                          </Fragment>
                      ) }
                  </div>
              </div>
          </Toolbar>
      </AppBar>
  </header>
);

export default Component;