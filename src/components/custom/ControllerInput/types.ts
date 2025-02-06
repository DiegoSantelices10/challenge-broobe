import { IInputProps } from '@gluestack-ui/input/lib/types';
import {
  Control,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  RegisterOptions,
} from 'react-hook-form';

export interface IControllerInputProps extends IInputProps {
    name: string;
    className?: string;
    label?: string;
    placeholder?: string;
    control?: Control<any>;
    rules?: RegisterOptions;
  }

export interface IRenderInputProps {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }
