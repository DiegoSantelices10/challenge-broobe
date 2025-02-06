import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const generateRandomId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 15);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const transformData = (auditResults: Record<string, { score: number; title: string }>) => ({
  labels: Object.values(auditResults).map(item => item.title),
  datasets: [
    {
      data: Object.values(auditResults).map(item => Math.round(item.score * 100)),
    },
  ],
});
