import React from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import PageWrapper from "../../../../decorators/PageWrapper/index";
import Button from "@material-ui/core/Button/Button";

type Props = {
    onSubmit: any
}

const ArticleForm: React.SFC<Props> = ({ onSubmit }) => (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, pristine, invalid }) => (
            <form onSubmit={handleSubmit}>
                <Field
                    name="email"
                    render={({ input, meta }) => (
                        <TextField
                            {...input}
                            label="Email"
                        />
                    )}
                />

                <Field
                    name="password"
                    render={({ input, meta }) => (
                        <TextField
                            {...input}
                            type="password"
                            label="Password"
                        />
                    )}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={pristine || invalid}
                >
                    Submit
                </Button>
            </form>
        )}
    />
);

export default PageWrapper(ArticleForm);
