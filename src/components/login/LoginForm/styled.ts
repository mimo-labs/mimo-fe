import styled from 'styled-components';

// ui
import { BaseInput } from 'ui/styled/BaseInput';

// lib
import { PADDINGS, COLORS, MARGINS } from 'lib/variables';
import { BaseButton } from 'ui/styled/BaseButton';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 15rem;
  height: 20rem;

  border: 2px solid ${COLORS.black.one};

  background-color: ${COLORS.white.one};

  padding: ${PADDINGS.two};

  .bottom_content,
  .top_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 7rem;
  height: 5rem;
  border: 2px solid ${COLORS.black.one};
  margin-bottom: ${MARGINS.two};
`;

export const Input = styled(BaseInput)`
  margin-bottom: ${MARGINS.two};
`;

export const Button = styled(BaseButton)``;
