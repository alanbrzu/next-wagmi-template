import './globals.css'

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { headers } from 'next/headers'
import { Toaster } from 'sonner'

import Navbar from '@/components/Navbar'
import { cn } from '@/lib/utils'
import { ContextProvider } from '@/lib/wagmi/context'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	title: 'NextJS Wagmi Template',
	description: 'Description',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookie = headers().get('cookie') || ''

	return (
		<html lang="en">
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<ContextProvider cookie={cookie}>
					<Toaster />
					<Navbar />
					{children}
				</ContextProvider>
			</body>
		</html>
	)
}
