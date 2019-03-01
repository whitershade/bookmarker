import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.props.loadItems();
  }

  render() {
    return (
      <div className={styles.articles}>
        { this.props.data.map(({ _id, title }) => (
          <p key={_id}>
            <Link to={`/articles/${_id}`}>
              {title}
            </Link>
          </p>)
        )}
      </div>
    );
  }
}

Articles.propTypes = {
  data: PropTypes.instanceOf(Array),
  isLoading: PropTypes.bool,
  loadItems: PropTypes.func.isRequired
};

export default Articles;
