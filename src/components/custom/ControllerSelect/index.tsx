import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Box } from '@/src/components/ui/box';
import { IControllerSelectProps, IRenderSelectProps } from './types';
import ActionSheet from '../ActionSheet';

const ControllerSelect: FC<IControllerSelectProps> = (props) => {
  const {
    control,
    name,
    options,
    label,
    className,
    placeholder,
    rules,
    ...rest
  } = props;

  const renderSelect = ({
    field: {
      onChange,
      value,
    },
  }: IRenderSelectProps) => (
    <Box
      className="w-full"
    >
      <ActionSheet
        value={value}
        options={options}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </Box>

  );

  return (
    <Controller
      name={name}
      control={control}
      render={renderSelect}
      rules={rules}
    />
  );
};

export default ControllerSelect;
