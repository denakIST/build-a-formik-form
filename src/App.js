import React from "react";
import { useFormik } from 'formik';
import  validator  from 'validator';
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: '',
    },
    onSubmit: values => {
      alert('Login Successful')
      
    },
    validate: values => {
      let errors = {};
      if (!values.emailField) errors.emailField = "Field required";
      if (!values.pswField) errors.pswField = "Field required";
      if (values.emailField && !validator.isEmail(values.emailField)) errors.emailField = "Username should be an email";
      return errors;
    },

    notify: () => {
      msg = '';
      if (!values.errors) msg = "Login Successful";
      return msg;
    }
  });

  return (
    <div>
      <form onSubmit = {formik.handleSubmit}>
        <div>Email</div>
        <input name='emailField' type='email' onChange={ formik.handleChange} value={formik.values.emailField} />
        {formik.errors.emailField ? (<div id='emailError'>{ formik.errors.emailField}</div>) : null}
        <div>pswField</div>
        <input name='pswField' type='text' onChange={ formik.handleChange} value={formik.values.pswField} />
        {formik.errors.pswField ? (<div id='pswError'>{ formik.errors.pswField}</div>) : null}  
        <div>
          <button id='submitBtn' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
