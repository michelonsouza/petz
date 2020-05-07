import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/img/logo_petz.png';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/" title="Petz Blog">
        <img src={logo} alt="Petz" />
      </Link>
    </Container>
  );
}

export default Header;
