import React, { Component } from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import styles from './styles.module.css';

class Article extends Component {
  constructor(props) {
    super(props);

    this.props.loadItem(this.props.match.params.id);
  }

  render() {
    const { isLoading, data } = this.props;

    if (isLoading || !data.content) return null;

    return (
      <div className={styles.article}>
        {renderHTML(data.content)}
      </div>
    );
  }
}

Article.propTypes = {
  data: PropTypes.instanceOf(Object),
  isLoading: PropTypes.bool,
  loadItem: PropTypes.func.isRequired
};

export default Article;
