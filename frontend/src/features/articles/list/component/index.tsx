import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../../../../decorators/PageWrapper/index';
import styles from './styles.module.css';

interface Articles {
    _id: string;
    title: string;
}

type Props = {
  loadItems: Function,
  data: Articles[]
}

const Articles: React.SFC<Props> = ({ loadItems, data }) => {
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

export default PageWrapper(Articles);