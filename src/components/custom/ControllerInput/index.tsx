import { FC } from 'react';

import { Controller } from 'react-hook-form';
import { IControllerInputProps, IRenderInputProps } from './types';
import Input from './Input';

const ControllerInput: FC<IControllerInputProps> = (props) => {
  const {
    control,
    name,
    rules,
    ...rest
  } = props;

  const renderInput = ({
    field: {
      onChange,
      onBlur,
    },
  }: IRenderInputProps) => (
    <Input
      onChangeText={onChange}
      onBlur={onBlur}
      {...rest}
    />
  );

  return (
    <Controller
      control={control}
      name={name}
      render={renderInput}
      rules={rules}
    />
  );
};

export default ControllerInput;
