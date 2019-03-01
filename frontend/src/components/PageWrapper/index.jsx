import React from 'react';
import styles from './styles.module.css';

export default function PageWrapper(Component) {
  return (props) => (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        Header
      </header>
      <section className={styles.pageContent}>
        <Component {...props} />
      </section>
    </div>
  );
}
