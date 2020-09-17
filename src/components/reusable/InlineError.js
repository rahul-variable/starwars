import React from 'react';
import PropTypes from 'prop-types';
export const InlineError = ({ description }) => {
  return (
    <div className="errorDiv">
      <span>{description}</span>
    </div>
  );
};
InlineError.propTypes = {
  description: PropTypes.string.isRequired,
};
