import styled from 'styled-components';

// lib
import { COLORS } from 'lib/variables';

export const BaseButton = styled.button`
  width: 100%;
  height: 1.75rem;
  line-height: 2rem;

  border-radius: 2px;

  background-color: ${COLORS.black.two};
  color: ${COLORS.white.one};
`;
