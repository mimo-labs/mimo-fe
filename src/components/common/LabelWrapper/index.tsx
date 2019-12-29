import React from 'react';

// styled
import { Container, Label } from './styled';

// types
import { LabelledInputProps } from './types';

const LabelWrapper = ({ label, children }: LabelledInputProps) => (
  <Container>
    <Label>{label}</Label>
    {children}
  </Container>
);

export default LabelWrapper;
