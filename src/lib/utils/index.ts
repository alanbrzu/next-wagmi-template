import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
// ^ shadcn utils

export const isDevelopment = () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export const fetcher = (url: string) => fetch(url).then(res => res.json())
