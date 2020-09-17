import PropTypes from 'prop-types';
import React from 'react';
export class ErrorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorInfo: null };
  }

  componentDidCatch(errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      errorInfo,
    });
  }

  render() {
    const { errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return <div>System Error</div>;
    }
    // Normally, just render children
    return children;
  }
}

ErrorComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
