import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form'

class ArticleForm extends Component {
  render() {
    return (
      <Form
        onSubmit={this.props.onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>URL</label>
              <Field name="url" component="input" placeholder="URL" />
            </div>

            <button type="submit" disabled={pristine || invalid}>
              Submit
            </button>
          </form>
        )}
      />
    );
  }
}

ArticleForm.propTypes = {};

export default ArticleForm;
