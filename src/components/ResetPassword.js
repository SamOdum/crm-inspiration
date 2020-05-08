import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ResetPassword = () => {
  const [resetData, setResetData] = useState({
    PasswordResetRequestForm_email: '',
  });

  const handleInputChange = (event) => {
    setResetData({
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
            <li className="active">Request password reset</li>
          </ul>
          <section className="main-container col1-layout">
            <div className="main container">
              <div className="site-request-password-reset">
                <h1>Request password reset</h1>
                <p>
                  Please fill out your email.A link to reset password will be
                  sent there.
                </p>
                <div className="row">
                  <div className="col-lg-5">
                    <form id="request-password-reset-form">
                      <input
                        type="hidden"
                        name="_csrf"
                        value="U-aoM7Rfzn_GH1Yna-kxQhG59cTVWwrCinRfepbZxG0w0OpLgjmbB6peDlUMoAc4Zfeck-EhSIjvIDBK2LWUAw=="
                      />
                      <div className="form-group field-passwordresetrequestform-email required">
                        <label
                          className="control-label"
                          htmlFor="passwordresetrequestform-email"
                        >
                          Email
                          <input
                            type="text"
                            id="passwordresetrequestform-email"
                            className="form-control"
                            name="PasswordResetRequestForm_email"
                            aria-required="true"
                            value={resetData.PasswordResetRequestForm_email}
                            onChange={handleInputChange}
                          />
                        </label>
                        <p className="help-block help-block-error" />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                          Send
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

export default ResetPassword;
