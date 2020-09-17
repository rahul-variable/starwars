import React from 'react';
import PropTypes from 'prop-types';
import { InlineError } from '../../reusable/InlineError';
export const SWLoginPresentation = ({ loginError, onChange, data, error, onLoginClick }) => {
  return (
    <>
      <form noValidate>
        {loginError && (
          <div className="errorContainer">
            <span>Login failed. Please try again</span>
          </div>
        )}
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={onChange}
            value={data.username || ''}
          />
          {error.username && <InlineError description="Please enter the username" />}
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={onChange}
            value={data.password || ''}
          />
          {error.password && <InlineError description="Please enter the password" />}
          <button type="button" onClick={onLoginClick}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

SWLoginPresentation.propTypes = {
  onChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  loginError: PropTypes.bool,
  onLoginClick: PropTypes.func.isRequired,
};

SWLoginPresentation.defaultProps = {
  loginError: false,
};
