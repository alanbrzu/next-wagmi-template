import './globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { headers } from 'next/headers'
import { Toaster } from 'sonner'
import { cookieToInitialState } from 'wagmi'

import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { ContextProvider } from '@/lib/wagmi/context'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'Web3 Template',
	description: 'Web3 Template description',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// const initialState = cookieToInitialState(config, headers().get('cookie'))

	return (
		<html lang="en">
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<ContextProvider>
					<Toaster />
					<Navbar />
					{children}
				</ContextProvider>
			</body>
		</html>
	)
}
