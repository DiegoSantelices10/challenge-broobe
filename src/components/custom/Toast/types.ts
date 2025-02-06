export interface IToastProps {
    title?: string;
    type: 'success' | 'warning' | 'error';
    duration?: number;
    description?: string;
}
