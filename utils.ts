import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(
  amount: number,
  currencyCode: string,
  locale = 'en-US'
) {
  return new Intl.NumberFormat(locale, {
    currency: currencyCode,
    style: 'currency',
  }).format(amount);
}
