import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.module.css';

const Component = () => (
  <div className={styles.loading}>
    <CircularProgress />
  </div>
);

export default Component;
