import styled from 'styled-components';

// lib
import { COLORS } from 'lib/variables';

export const BaseInput = styled.input`
  width: 100%;
  height: 1.75rem;

  border: 2px solid ${COLORS.black.one};
  border-radius: 4px;

  color: ${COLORS.black.one};
  background-color: ${COLORS.white};

  padding-top: 0.2rem;
  padding-left: 0.3rem;

  :hover {
    cursor: pointer;
  }

  ::placeholder {
    color: ${COLORS.grey};
  }
`;
