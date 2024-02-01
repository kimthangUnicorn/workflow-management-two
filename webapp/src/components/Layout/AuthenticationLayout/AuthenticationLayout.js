import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';

AuthenticationLayout.propTypes = {};

function AuthenticationLayout(props) {
  return (
    <div>
      <Header />
      {props}
    </div>
  );
}

export default AuthenticationLayout;
