import React from "react";
import '../login.scss';
import { Form, Field, withFormik } from 'formik'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className='login'>
      <h1>Welcome to the Bubble App!</h1>
      <Form className='login-form'>
      <h2>Login</h2>

      <Field className='login-field' type='text' name='username' placeholder='Enter username' />
      <Field className='login-field' type='password' name='password' placeholder='Enter password' />

      <button type='submit'>Submit</button>
      </Form>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    }
  }
})(Login)

export default FormikForm;
