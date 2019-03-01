import React  from 'react';
import { Form, Field } from 'react-final-form';
import PageWrapper from "../../../../components/PageWrapper";

type Props = {
    onSubmit: any
}

const ArticleForm: React.SFC<Props> = ({ onSubmit }) => (
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

// @ts-ignore
export default PageWrapper(ArticleForm);
