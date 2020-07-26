import React, { FC } from 'react';
import { FormikErrors, FormikValues, FormikHandlers, FormikTouched } from 'formik';

import { FormControl, FormLabel, Input, FormErrorMessage, PseudoBox } from '@chakra-ui/core';

type HandleChange = Pick<FormikHandlers, 'handleChange'>['handleChange'];

type Props = {
  onChange: HandleChange;
  errors: FormikErrors<FormikValues>;
  values: FormikValues;
  touched: FormikTouched<FormikValues>;
  placeholder: string;
  name: string;
  label: string;
};

const FormInput: FC<Props> = ({ onChange, values, errors, placeholder, name, label, touched }) => (
  <PseudoBox _last={{ mb: 0 }} mb={5} w="100%">
    <FormControl isInvalid={Boolean(touched?.[name] && errors?.[name])}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input id={name} name={name} onChange={onChange} placeholder={placeholder} type="text" value={values?.[name]} />
      <FormErrorMessage>{errors?.[name]}</FormErrorMessage>
    </FormControl>
  </PseudoBox>
);

export default FormInput;
