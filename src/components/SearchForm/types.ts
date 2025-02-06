import {
  Control, FieldValues, UseFormHandleSubmit,
} from 'react-hook-form';

export interface ISearchFormProps {
    control: Control<any>;
    isLoading: boolean;
    onSubmit: (data: FieldValues) => void;
    handleSubmit: UseFormHandleSubmit<FieldValues, undefined>
}
