import React ,{useState} from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; 

const SignInSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate=useNavigate();
  const [correct,setCorrect]=useState(true);
  return (
    <div className="login-container">
      <h3 className="login-title">Sign In</h3>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log({ values });
          const users=JSON.parse(localStorage.getItem('users'));
          const user=users.filter((item)=>item.username===values.username&&item.password===values.password)
          if(user.length!==0) navigate('/');
          else setCorrect(false);
          // Add submit logic here
          //localStorage.setItem("demo_user", true);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <form noValidate onSubmit={handleSubmit} className="login-form">
            <div>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="username"
                placeholder="Enter username"
                className="login-input"
              />
              <br />
              {touched.username && !!errors.username && (
                <div className="login-error">{errors.username}</div>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
                placeholder="Enter password"
                className="login-input"
              />
              <br />
              {touched.password && !!errors.password && (
                <div className="login-error">{errors.password}</div>
              )}
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
        )}
      </Formik>
      {!correct && <div className='login-text login-error'>Incorrect username or password</div>}
      <div className='login-text'>
        <span>Don't have an account? </span>
        <Link to='/signup' className="signin-link">   Sign Up</Link>
      </div>
      
    </div>
  );
};

export default Login;
