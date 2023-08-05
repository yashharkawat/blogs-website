import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import the external CSS file

const signUpSchema = yup.object().shape({
  name: yup.string().required("Enter valid name"),
  age: yup.string().required("Enter valid age"),
  username: yup.string().required("Enter valid username"),
  password: yup.string().required("Enter valid password"),
});

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="title">Sign Up</h2>
      <Formik
        initialValues={{ username: "", password: "", name: "", age: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          //console.log(values);
          localStorage.setItem('current_user',JSON.stringify(values));
          const users=JSON.parse(localStorage.getItem('users'));
          users.push(values);
          console.log(users);
          localStorage.setItem('users',JSON.stringify(users));
          navigate('/');
        }}
      >
        {({ values, handleBlur, handleChange, handleSubmit, errors, touched }) => (
          <form noValidate onSubmit={handleSubmit} className="form">
            <input
              name="name"
              type="text"
              placeholder="Enter name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
            />
            {touched.name && errors.name && <div className="error">{errors.name}</div>}
            <input
              name="age"
              type="text"
              placeholder="Age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
            />
            {touched.age && errors.age && <div className="error">{errors.age}</div>}
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
            />
            {touched.username && errors.username && <div className="error">{errors.username}</div>}
            <input
              name="password"
              type="text"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="input"
            />
            {touched.password && errors.password && <div className="error">{errors.password}</div>}
            <button type="submit" className="button">
              Sign up
            </button>
          </form>
        )}
      </Formik>
      <div className='login-text'>
        <span>Already have an account? </span>
        <Link to='/login' className="signin-link">   Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
