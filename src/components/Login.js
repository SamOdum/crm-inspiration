import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';

const Login = () => {
  const [loginData, setLoginData] = useContext(LoginContext);

  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheckChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: !event.target.value,
    });
  };
  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    setLoginData({
      ...loginData,
      LoginForm_isSubmitting: true,
      LoginForm_errorMessage: null,
    });
    fetch('http://localhost:5000/api/v1/auth/login/', {
      //* *Remember to implement .env here */
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginData.LoginForm_email,
        password1: loginData.LoginForm_password1,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      // .then((resJson) => {
      //   dispatch({
      //     type: 'LOGIN',
      //     payload: resJson,
      //   });
      // })
      .catch((error) => {
        setLoginData({
          ...loginData,
          isSubmitting: false,
          errorMessage:
            error.status === 400
              ? 'Fill all fields correctly'
              : error.message || error.statusText,
        });
      });
  };

  return (
    <div className="main-container col1-layout">
      <div className="container">
        <div className="row">
          <ul className="breadcrumb">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="active">Login</li>
          </ul>

          <section className="main-container col1-layout">
            <div className="main container">
              <div className="site-login">
                <h1>Login</h1>

                <p>Please fill out the following fields to login:</p>

                <div className="row">
                  <div className="col-lg-5">
                    <form onSubmit={handleLoginFormSubmit}>
                      <input
                        type="hidden"
                        name="_csrf"
                        value="L3bKbU8EVXsLcIqKQv8JmfJzwovQO_vyeUESXhb7A9ZnI_kgdlM2LEwp5804x3_vuUf0x7NJnb5JFncERb1S4Q=="
                      />
                      <div className="form-group field-loginform-username required">
                        <label
                          className="control-label"
                          htmlFor="loginform-email"
                        >
                          Email
                          <input
                            type="text"
                            id="loginform-email"
                            className="form-control"
                            name="LoginForm_email"
                            aria-required="true"
                            value={loginData.name}
                            onChange={handleInputChange}
                          />
                        </label>
                        <p className="help-block help-block-error" />
                      </div>
                      <div className="form-group field-loginform-password required">
                        <label
                          className="control-label"
                          htmlFor="loginform-password"
                        >
                          Password
                          <input
                            type="password"
                            id="loginform-password"
                            className="form-control"
                            name="LoginForm_password1"
                            aria-required="true"
                            value={loginData.password1}
                            onChange={handleInputChange}
                          />
                        </label>

                        <p className="help-block help-block-error" />
                      </div>
                      <div className="form-group field-loginform-rememberme">
                        <div className="checkbox">
                          <label htmlFor="loginform-rememberme">
                            <input
                              type="hidden"
                              name="LoginForm[rememberMe]"
                              value="0"
                            />
                            <input
                              type="checkbox"
                              id="loginform-rememberme"
                              name="LoginForm_rememberMe"
                              value="1"
                              checked={loginData.rememberMe}
                              onChange={handleCheckChange}
                            />
                            Remember Me
                          </label>
                          <p className="help-block help-block-error" />
                        </div>
                      </div>
                      <div style={{ color: '#999', margin: `1em 0` }}>
                        If you forgot your password you can
                        <NavLink to="/reset-password"> reset it.</NavLink>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          name="login-button"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
