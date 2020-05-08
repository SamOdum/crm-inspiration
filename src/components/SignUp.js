import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    SignupForm_firstname: '',
    SignupForm_lastname: '',
    SignupForm_email: '',
    SignupForm_password: '',
  });

  const handleInputChange = (event) => {
    setSignUpData({
      [event.target.name]: event.target.value,
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
            <li className="active">Signup</li>
          </ul>

          <section className="main-container col1-layout">
            <div className="main container">
              <div className="site-signup">
                <h1>Signup</h1>

                <p>Please fill out the following fields to signup</p>

                <div className="row">
                  <div className="col-lg-5">
                    <form id="form-signup">
                      <input
                        type="hidden"
                        name="_csrf"
                        value="pRqKpPyeBVDacSAyx9UdDSJEJTQwyUZu-8zn7wOUna_GLMjcyvhQKLYweECgnCt3VgpMYwSzBCSemIjfTfjNwQ=="
                      />
                      <div className="form-group field-signupform-firstname required">
                        <label
                          className="control-label"
                          htmlFor="signupform-firstname"
                        >
                          First Name
                          <input
                            type="text"
                            id="signupform-firstname"
                            className="form-control"
                            name="SignupForm_firstname"
                            value={signUpData.SignupForm_firstname}
                            onChange={handleInputChange}
                            aria-required="true"
                          />
                        </label>
                        <p className="help-block help-block-error" />
                      </div>
                      <div className="form-group field-signupform-lastname required">
                        <label
                          className="control-label"
                          htmlFor="signupform-lastname"
                        >
                          Last Name
                          <input
                            type="text"
                            id="signupform-lastname"
                            className="form-control"
                            name="SignupForm_lastname"
                            value={signUpData.SignupForm_lastname}
                            onChange={handleInputChange}
                            aria-required="true"
                          />
                        </label>
                        <p className="help-block help-block-error" />
                      </div>
                      <div className="form-group field-signupform-email required">
                        <label
                          className="control-label"
                          htmlFor="signupform-email"
                        >
                          Email
                          <input
                            type="text"
                            id="signupform-email"
                            className="form-control"
                            name="SignupForm_email"
                            value={signUpData.SignupForm_email}
                            onChange={handleInputChange}
                            aria-required="true"
                          />
                        </label>
                        <p className="help-block help-block-error" />
                      </div>
                      <div className="form-group field-signupform-password required">
                        <label
                          className="control-label"
                          htmlFor="signupform-password"
                        >
                          Password
                          <input
                            type="password"
                            id="signupform-password"
                            className="form-control"
                            name="SignupForm_password"
                            value={signUpData.SignupForm_password}
                            onChange={handleInputChange}
                            aria-required="true"
                          />
                        </label>
                        <p className="help-block help-block-error" />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          name="signup-button"
                        >
                          Signup
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

export default SignUp;
