import React from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button/Button';
import PageWrapper from '../../../../decorators/PageWrapper/index';
import styles from './styles.module.css';


interface Props {
  onSubmit: any;
}

const ArticleForm: React.SFC<Props> = ({ onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <div className={styles.field}>
          <Field
            name="url"
            render={({ input, meta }) => (
              <TextField
                {...input}
                name="url"
                placeholder="URL"
              />
            )}
          />
        </div>

        <Button type="submit" disabled={pristine || invalid}>
          Submit
        </Button>
      </form>
    )}
  />
);

export default PageWrapper(ArticleForm);
