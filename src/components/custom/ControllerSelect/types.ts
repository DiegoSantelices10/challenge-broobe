import { ClassValue } from 'clsx';
import {
  Control,
  ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn,
} from 'react-hook-form';

export interface IRenderSelectProps {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<FieldValues>;
  }

export interface IControllerSelectProps extends FieldValues{
    name: string;
    placeholder?: string;
    triggerClassName?: ClassValue;
    control?: Control<any>;
  }
