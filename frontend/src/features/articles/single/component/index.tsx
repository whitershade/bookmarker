import React, { useEffect } from 'react';
// @ts-ignore
import renderHTML from 'react-render-html';
import PageWrapper from '../../../../decorators/PageWrapper/index';
// import styles from './styles.module.css';

type Props = {
    isLoading: boolean,
    loadItem: Function,
    data: {
      content: string
    },
    match: {
      params: {
        id: string
      }
    }
}

const Article:React.SFC<Props> = (
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

export default PageWrapper(Article);
