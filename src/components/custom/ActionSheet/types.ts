import { ViewProps } from 'react-native';

export interface IOption {
  label: string;
  value: string;
}

export interface ActionSheetProps extends ViewProps {
  placeholder?: string;
  options: IOption[];
  label?: string;
  onChange: (...event: any[]) => void;
  value: string;
}
