import React  from 'react';
import { Form, Field } from 'react-final-form';
import PageWrapper from "../../../../decorators/PageWrapper";

type Props = {
    onSubmit: any
}

const ArticleForm: React.SFC<Props> = ({ onSubmit }) => (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <Field name="email" component="input" />
                </div>

                <div>
                    <label>Password</label>
                    <Field name="password" component="input" />
                </div>

                <button type="submit" disabled={pristine || invalid}>
                    Submit
                </button>
            </form>
        )}
    />
);

export default PageWrapper(ArticleForm);
