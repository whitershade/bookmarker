import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const PageWrapper = Component => props => (
  <div className={styles.page}>
    <header className={styles.pageHeader}>
      <Link to="/">Articles </Link>
      <Link to="/articles/add">Add new</Link>
    </header>
    <section className={styles.pageContent}>
      <Component {...props} />
    </section>
  </div>
);

export default PageWrapper;
