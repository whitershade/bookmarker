import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import styles from './styles.module.css';

const Component = ({ isAuthenticated, logout }: any) => (
  <header className={styles.header}>
    <div>
        <Link to="/">Articles</Link>
        <Link to="/articles/add">Add new</Link>
    </div>

    <div>
        { isAuthenticated ? (
            <Button onClick={logout} variant="contained" color="primary">
                Logout
            </Button>
        ): null }
    </div>
  </header>
);

export default Component;