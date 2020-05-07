import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input {...rest} />
    </Container>
  );
}

Input.defaultProps = {
  icon: undefined,
};

Input.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

export default Input;
