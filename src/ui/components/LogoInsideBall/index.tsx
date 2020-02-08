import React from 'react';

// styled
import { Container } from './styled';

// assets
import { ReactComponent as MimeLogo } from 'assets/icons/mime.svg';

const LogoInsideBall = () => (
  <Container>
    <div className="logo">
      <MimeLogo />
    </div>
  </Container>
);

export default LogoInsideBall;
