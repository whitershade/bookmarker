import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import React, { Fragment, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface IProps {
  isAuthenticated: boolean;
  logout: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Component = ({ isAuthenticated, logout }: IProps) => (
  <header className={styles.header}>
    <AppBar position="static" color="default">
      <Toolbar>
        <div className={styles.content}>
          <div>
            <Link to="/" className={styles.link}>
              <Button>Articles</Button>
            </Link>
            <Link to="/articles/add" className={styles.link}>
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
                <Link to="/login" className={styles.link}>
                  <Button>Login</Button>
                </Link>
                <Link to="/register" className={styles.link}>
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
