export interface IOption {
    value: string;
    label: string
}

export interface ICheckboxProps {
    options: IOption[]
    value: string[];
    onChange: (...event: any[]) => void;
}
