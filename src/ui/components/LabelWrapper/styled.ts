import styled from 'styled-components';

// lib
import { FONT_SIZES, MARGINS } from 'lib/variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-size: ${FONT_SIZES.three};
  margin-bottom: ${MARGINS.zero};
`;
