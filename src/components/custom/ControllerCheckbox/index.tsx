import React from 'react';
import { Controller } from 'react-hook-form';
import { IControllerCheckboxProps, IRenderInputProps } from './types';
import Checkbox from './Checkbox';

const ControllerCheckbox = (props: IControllerCheckboxProps) => {
  const {
    control,
    options,
    name,
    label,
    ...rest
  } = props;

  const renderInput = ({
    field: {
      onChange,
      value,
    },
  }: IRenderInputProps) => (
    <Checkbox
      options={options}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );

  return (
    <Controller
      name={name}
      control={control}
      render={renderInput}
    />
  );
};

export default ControllerCheckbox;
