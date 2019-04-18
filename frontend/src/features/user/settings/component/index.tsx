import React, { FC, MouseEvent } from 'react';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button/Button';
import { Field, Form } from 'react-final-form';
import PageWrapper from '../../../../decorators/PageWrapper';
import styles from './styles.module.css';

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

    <Form
      onSubmit={patchItem}
      initialValues={initialValues}
      render={({ handleSubmit, pristine, invalid }) => (
        <form onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <Field
              name="settings.textColor"
              render={({ input, meta }) => (
                <div className={styles.field}>
                  Text Color
                  <ChromePicker
                    color={input.value}
                    onChangeComplete={({ hex }) => input.onChange(hex)}
                  />
                </div>
              )}
            />
            <Field
              name="settings.backgroundColor"
              render={({ input, meta }) => (
                <div className={styles.field}>
                  Background Color
                  <ChromePicker
                    color={input.value}
                    onChangeComplete={({ hex }) => input.onChange(hex)}
                  />
                </div>
              )}
            />
          </div>

          <Button type="submit" disabled={pristine || invalid}>Apply</Button>
        </form>
      )}
    />

    <Button onClick={openModal}>Delete account</Button>
  </div>
);

export default PageWrapper(Component);
