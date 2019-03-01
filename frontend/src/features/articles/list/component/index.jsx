import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PageWrapper from '../../../../components/PageWrapper';
import styles from './styles.module.css';

const Articles = ({ loadItems, data }) => {
  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className={styles.articles}>
      { data.map(({ _id, title }) => (
        <p key={_id}>
          <Link to={`/articles/${_id}`}>
            {title}
          </Link>
        </p>)
      )}
    </div>
  );
};

Articles.propTypes = {
  data: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool,
  loadItems: PropTypes.func.isRequired
};

export default PageWrapper(Articles);