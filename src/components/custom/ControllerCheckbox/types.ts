import { ICheckboxProps } from '@gluestack-ui/checkbox/lib/types';
import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from 'react-hook-form';
import { IOption } from './Checkbox/types';

export interface IControllerCheckboxProps extends Omit<ICheckboxProps, 'value'> {
    name: string;
    className?: string;
    control: Control<any>;
    options: IOption[];
    label?: string;
  }

export interface IRenderInputProps {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }
