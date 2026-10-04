import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: '',
  email: '',
  message: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).max(15).required(),
  email: Yup.string().max(50).email().required(),
  message: Yup.string().max(500)
});

const handleSubmit = (
  _values: FormValues,
  actions: FormikHelpers<FormValues>
) => {
  actions.resetForm();
};

export default function ContactForm() {
  const id = useId();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor={`${id}-name`} className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={`${id}-name`}
              className={css.input}
              placeholder="Name"
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={`${id}-email`} className={css.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id={`${id}-email`}
              className={css.input}
              placeholder="Email"
            />
            <ErrorMessage name="email" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={`${id}-message`} className={css.label}>
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              id={`${id}-message`}
              rows={8}
              className={css.input}
              placeholder="Message"
            />
            <ErrorMessage
              name="message"
              component="span"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}
