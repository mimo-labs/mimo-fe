import styled from 'styled-components';

// lib
import { MARGINS } from 'lib/variables';

// ui components
import { RedBall } from 'ui/styled/session/RedBall';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  position: relative;

  width: 7rem;
  height: 5rem;
  margin-bottom: ${MARGINS.two};

  svg {
    width: 100%;
    height: 100%;
  }

  .logo {
    z-index: 2;
  }
`;

export const Ball = styled(RedBall)`
  position: absolute;

  &.large {
    top: -20px;
    right: -8px;
    z-index: 1;
  }

  &.little {
    top: 50;
    right: 50;

    z-index: 3;

    width: 12px;
    height: 12px;
  }
`;
