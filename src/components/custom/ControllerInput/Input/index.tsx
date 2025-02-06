import {FC } from 'react';
import { InputProps } from './types';

import { cn } from '@/src/utils';
import { Box } from '@/src/components/ui/box';
import {
  InputField,
  Input as TextInput,
} from '@/src/components/ui/input';
import { Text } from '@/src/components/ui/text';

const Input: FC<InputProps> = (props) => {
  const {
    placeholder,
    type,
    className,
    label,
    ...rest
  } = props;

  return (
    <Box className="w-full">
      <Text className="p-0.5 pl-2 text-gray-400">{label}</Text>
      <TextInput
        className={cn(className)}
      >
        <InputField
          placeholder={placeholder}
          {...rest}
        />
      </TextInput>
    </Box>
  );
};

export default Input;
