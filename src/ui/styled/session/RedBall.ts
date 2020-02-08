import styled from 'styled-components';

// lib
import { COLORS } from 'lib/variables';

export const RedBall = styled.div`
  border-radius: 50%;
  border: 2px solid ${COLORS.black.one};
  background-color: ${COLORS.red.two};
  width: 8rem;
  height: 8rem;
`;
