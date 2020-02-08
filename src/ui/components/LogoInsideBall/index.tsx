import React from 'react';

// styled
import { Container, LogoWrapper } from './styled';

// assets
import { ReactComponent as MimeLogo } from 'assets/icons/mime.svg';

const LogoInsideBall = () => (
  <Container className="ball">
    <LogoWrapper>
      <MimeLogo />
    </LogoWrapper>
  </Container>
);

export default LogoInsideBall;
