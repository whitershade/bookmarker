import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import PageWrapper from '../../../../components/PageWrapper';
// import styles from './styles.module.css';

const Article = (
  { isLoading, loadItem, data: { content }, match: { params: { id } }}
) => {
  useEffect(() => {
    loadItem(id);
  }, [id]);

  if (isLoading || !content) return null;

  return (
    <div>
      {renderHTML(content)}
    </div>
  );
};

Article.propTypes = {
  data: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool,
  loadItem: PropTypes.func.isRequired
};

export default PageWrapper(Article);
