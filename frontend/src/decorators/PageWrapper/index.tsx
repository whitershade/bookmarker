import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default function PageWrapper<TProps>(WrappedComponent:React.ComponentType<TProps>) {
    return class extends Component<TProps>  {
        render() {
            return (
                <div className={styles.page}>
                    <header className={styles.pageHeader}>
                        <Link to="/">Articles</Link>
                        <Link to="/articles/add">Add new</Link>
                    </header>
                    <section className={styles.pageContent}>
                        <WrappedComponent {...this.props} />
                    </section>
                </div>
            );
        }
    };
}
