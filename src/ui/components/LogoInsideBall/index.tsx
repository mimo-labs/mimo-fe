import React from 'react';

// styled
import { Container, Ball } from './styled';

// assets
import { ReactComponent as MimeLogo } from 'assets/icons/mime.svg';

const LogoInsideBall = () => (
  <Container>
    <div className="logo">
      <MimeLogo />
    </div>
    <Ball className="little" />
    <Ball className="large" />
  </Container>
);

export default LogoInsideBall;
