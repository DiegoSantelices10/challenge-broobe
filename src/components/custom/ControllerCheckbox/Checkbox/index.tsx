import React, { FC } from 'react';
import {
  Checkbox as CheckboxUI,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@/src/components/ui/checkbox';
import { CheckIcon } from '@/src/components/ui/icon';
import { ICheckboxProps } from './types';
import { HStack } from '@/src/components/ui/hstack';

const Checkbox: FC<ICheckboxProps> = (props) => {
  const {
    options,
    value,
    onChange,
    ...rest
  } = props;

  return (
    <CheckboxGroup
      value={value}
      onChange={onChange}
      {...rest}
    >
      <HStack space="xl" className="flex flex-wrap justify-center gap-8">
        {options.map(({ value, label }) => (
          <CheckboxUI key={value} value={value}>
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel>{label}</CheckboxLabel>
          </CheckboxUI>
        ))}
      </HStack>
    </CheckboxGroup>
  );
};

export default Checkbox;
