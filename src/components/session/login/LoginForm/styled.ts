import styled from 'styled-components';

// ui
import { BaseInput } from 'ui/styled/common/BaseInput';

// lib
import { PADDINGS, COLORS, MARGINS } from 'lib/variables';
import { BaseButton } from 'ui/styled/common/BaseButton';
import { RedBall } from 'ui/styled/session/RedBall';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  z-index: 2;

  width: 15rem;
  height: 20rem;

  border: 2px solid ${COLORS.black.one};
  border-radius: 4px;

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

export const LogoWrapper = styled.div`
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

export const Input = styled(BaseInput)`
  margin-bottom: ${MARGINS.two};
`;

export const Button = styled(BaseButton)``;

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
