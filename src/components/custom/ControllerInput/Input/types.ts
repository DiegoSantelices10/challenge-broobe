import { FieldValues } from 'react-hook-form';
import { TextInputProps } from 'react-native';

export interface InputProps extends FieldValues, TextInputProps {
  placeholder?: string
  className?: string
  label?: string
  type?: string;
}
