import React, { FC, MouseEvent } from 'react';
import Button from '@material-ui/core/Button/Button';
import { Field, Form } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import PageWrapper from '../../../../decorators/PageWrapper';
import styles from '../../../articles/form/component/styles.module.css';

interface Props {
  openModal: (e: MouseEvent<HTMLButtonElement>) => void;
  patchItem: any;
  initialValues: {
    settings: {
      textColor: string;
      backgroundColor: string;
    };
  };
}

const Component: FC<Props> = ({ openModal, patchItem, initialValues }) => (
  <div>
    <p>settings</p>

    <Button onClick={openModal}>
      Delete account
    </Button>

    <Form
      onSubmit={patchItem}
      initialValues={initialValues}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <Field
              name="settings.textColor"
              render={({ input, meta }) => (
                <TextField
                  {...input}
                  placeholder="Text Color"
                />
              )}
            />
            <Field
              name="settings.backgroundColor"
              render={({ input, meta }) => (
                <TextField
                  {...input}
                  placeholder="Background Color"
                />
              )}
            />
          </div>

          <Button type="submit" disabled={pristine || invalid}>
            Apply
          </Button>
        </form>
      )}
    />
  </div>
);

export default PageWrapper(Component);
