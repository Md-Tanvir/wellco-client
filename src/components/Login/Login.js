import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Login.css'

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div className="login-area py-5">
      <div className="container">
        <div data-aos="fade-up">
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <h2 className="text-center">LOGIN</h2>
            <input
              placeholder="Enter your email"
              className="form-control mb-4"
              type="email"
              name="email"
              onBlur={handleOnChange}
              required
            />
            <input
              type="password"
              name="password"
              onBlur={handleOnChange}
              placeholder="Enter your password"
              className="form-control mb-4"
              required
            />

            <button className="btn btn-success" type="submit">
              Login
            </button>
            <div className="mx-auto" style={{ maxWidth: "350px" }}>
              {isLoading && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
                </div>
              )}
              {user?.email && <p>Login successfully!</p>}
              {authError && (
                <p className="mb-0 text-danger mt-2">{authError}</p>
              )}
            </div>
          </form>

          <h6 className="my-3 text-center">
            Are you new? <Link to="/register">Register Here</Link>
          </h6>
          <div className="text-center">
            <button
              className="btn btn-danger mx-auto"
              onClick={handleGoogleSignIn}
            >
              <i className="fab fa-google"></i> Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
