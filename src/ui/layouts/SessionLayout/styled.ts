import styled from 'styled-components';

// lib
import { COLORS } from 'lib/variables';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: repeating-linear-gradient(
    to right,
    ${COLORS.black.one},
    ${COLORS.black.one} 2px,
    ${COLORS.white.one} 2px,
    ${COLORS.white.one} 60px
  );
`;
