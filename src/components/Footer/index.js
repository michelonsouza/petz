import React, { useMemo } from 'react';

import logoBlog from '~/assets/img/blog_petz.png';
import { Container } from './styles';

function Footer() {
  const year = useMemo(() => {
    return new Date().getFullYear();
  }, []);

  return (
    <Container>
      <p>
        Copyright &copy; {year}{' '}
        <a
          href="https://petz.com.br/blog"
          title="Petz Blog"
          rel="noopener noreferrer"
          target="blank"
        >
          Petz Blog
        </a>
      </p>

      <img src={logoBlog} alt="Petz Blog" />
    </Container>
  );
}

export default Footer;
