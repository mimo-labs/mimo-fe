import React, { useState, FC } from 'react';
import { FormikErrors, FormikValues, FormikHandlers, FormikTouched } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  PseudoBox,
} from '@chakra-ui/core';

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

const FormPasswordInput: FC<Props> = ({ onChange, values, errors, placeholder, name, label, touched }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleClick = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <PseudoBox _last={{ mb: 0 }} mb={5} w="100%">
      <FormControl isInvalid={Boolean(touched?.[name] && errors?.[name])}>
        <FormLabel htmlFor={name}>{label}</FormLabel>
        <InputGroup>
          <Input
            id={name}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type={isPasswordVisible ? 'text' : 'password'}
            value={values?.[name]}
          />
          <InputRightElement>
            {isPasswordVisible ? (
              <FiEyeOff onClick={handleClick} size={20} />
            ) : (
              <FiEye onClick={handleClick} size={20} />
            )}
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors?.[name]}</FormErrorMessage>
      </FormControl>
    </PseudoBox>
  );
};

export default FormPasswordInput;