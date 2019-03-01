import React  from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import PageWrapper from "../../../../components/PageWrapper";

const ArticleForm = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
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

ArticleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default PageWrapper(ArticleForm);
