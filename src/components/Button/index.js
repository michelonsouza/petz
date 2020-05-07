import React from 'react';
import Spinner from 'react-spinner-material';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Button({ variant, loading, children, ...rest }) {
  return (
    <Container variant={variant} {...rest}>
      {loading ? <Spinner color="#fff" stroke={2} radius={28} /> : children}
    </Container>
  );
}

Button.defaultProps = {
  variant: 'primary',
  loading: false,
};

Button.propTypes = {
  variant: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default Button;
