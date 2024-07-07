import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loginImage from '../PAGES/IMAGES/loginbg.jpg';
import Layout from '../Layout/layout';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (e) => {
    const value = e.target.value.trim();
    setUsername(value);
    setUsernameError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsernameError('');
    setPasswordError('');

    if (username.length < 1) {
      setUsernameError('*This field is required');
    } else if (username.length < 3) {
      setUsernameError('*Enter a valid username (at least 3 characters)');
    } else if (username !== 'smartcliff') {
      setUsernameError('*Invalid username');
    }

    if (password.length < 1) {
      setPasswordError('*This field is required');
    } else if (password !== 'smarter') {
      setPasswordError('*Invalid password');
    }

    if (username === 'smartcliff' && password === 'smarter') {
      // Perform login logic here (e.g., set auth state, store token, etc.)
      console.log('Login successful');

      // Redirect to AddTask component
      navigate('/coursemanagement');
    }
  };

  return (
    <>
      <div className="container">
        <div style={{display:"flex", justifyContent:"center", marginTop:"4rem", marginBottom:"-5rem"}}>
          <h2>ADMIN LOGIN</h2>
        </div>
        <div className="row d-flex align-items-center" style={{ height: "100vh" }} >
          <div className="col-md-6">
            <div className="login-image-container">
              <img src={loginImage} alt="Login" className="login-image" style={{ marginTop: "50px", width: "450px", borderRadius: "30px" }} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="vector">
              <div className="container-fluid">
                <div className="row">
                  {/* <div className="col-md-12">
                    <h2 className="oc">LOGIN FORM</h2>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    value={username}
                    onChange={handleUsernameChange}
                  // style={{ border: "3px solid black",boxShadow:"0px 0px 1px 1px black"}}
                  />
                  {usernameError && <span className="text-danger">{usernameError}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={handlePasswordChange}
                  // style={{ border: "3px solid black",boxShadow:"0px 0px 1px 1px black"}}

                  />
                  {passwordError && <span className="text-danger">{passwordError}</span>}
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;