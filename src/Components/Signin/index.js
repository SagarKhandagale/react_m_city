import React, { useState } from 'react'
import { firebase } from '../../firebase';

import { CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { showErrorToast, showSuccessToast } from '../Utils/tools'

import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = (props) => {

  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const redirectToDashboard = () => {
    if(navigate) navigate('/dashboard');
   }

  const formik = useFormik({
    initialValues: {
      email: 'admin123@gmail.com',
      password: 'AdminAdmin'
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .required('The email is requred')
    }),
    onSubmit: (values) => {
      setLoading(true);
      submitForm(values);
    }
  })

  const submitForm = (values) => {
    firebase.auth()
    .signInWithEmailAndPassword(
      values.email,
      values.password
    ).then(() => {
      redirectToDashboard();
      showSuccessToast('Welcome Back..!!');
    }).catch(error => {
      console.log(error);
      setLoading(false);
      showErrorToast(error.message);
    })
  }

  return (
    <div className="container">
      <div className="signin_wrapper" style={{ margin: '100px' }}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Please login</h2>
          <input
            name='email'
            placeholder='Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ?
            <div className="error_label">
              {formik.errors.email}
            </div>
            : null}

          <input
            placeholder='Password'
            name='password'
            type='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ?
            <div className="error_label">
              {formik.errors.email}
            </div>
            : null}

          {loading ?
            <CircularProgress className='progress' color='secondary' />
            :
            <button type='submit'>Log In</button>
          }
        </form>
      </div>
    </div>
  )
}

export default SignIn;
