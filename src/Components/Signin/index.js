import React, { useState } from 'react'

import { CircularProgress } from '@mui/material';
import { Redirect } from 'react-router-dom';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignIn = () => {

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
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
      console.log(values);
    }
  })

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
