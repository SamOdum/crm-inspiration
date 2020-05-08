import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({
    LoginForm_username: '',
    LoginForm_email: '',
    LoginForm_rememberMe: false,
    LoginForm_password1: '',
    LoginForm_password2: '',
    LoginForm_isSubmitting: false,
    LoginForm_errorMessage: null,
  });
  return (
    <LoginContext.Provider value={[loginData, setLoginData]}>
      {children}
    </LoginContext.Provider>
  );
};

LoginProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default LoginProvider;
